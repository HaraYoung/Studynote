import React, { memo } from "react";
//상태값을 로드하기위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";
//slice에 정의된 액션 함수들 참조
import { getMovieRank } from "../slice/MovieRankSlice";

import Spinner from "../components/Spinner";
import Table from "../components/Table";
//error정보를 표시하기 위한 컴포넌트
import ErrorView from "../components/ErrorView";
//날짜 처리 라이브러리
import dayjs from "dayjs";

const MovieRank = memo(() => {
  const dispatch = useDispatch();
  //Redux Store로 부터 ajax관련 상태값 구독- hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector((state) => state.movieRank);
  //검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [targetDt, setTargetDt] = React.useState(
    dayjs().add(-1, "d").format("YYYY-MM-DD")   //하루 전날 값이 필요
  );

  //컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 다스패치함
  React.useEffect(() => {
    dispatch(getMovieRank({ targetDt: targetDt.replaceAll("-", "") }));
  }, [dispatch, targetDt]);   //선택값이 바뀌었을때 ajax땡김

  //드롭다운의 선택이 변경된 경우의 이벤트
  const onDateChange = React.useCallback((e) => {
    e.preventDefault();
    //선택값으로 상태값을 갱신-> React.useEffect()에 의해 액션함수가 디스패치됨
    setTargetDt(e.target.value);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <form>
        <input
          type="date"
          className="form-control"
          placeholder="날짜 선택"
          value={targetDt}
          onChange={onDateChange}
        />
      </form>

      {error ? (
        <ErrorView error={error} />
      ) : (
        <Table>
          <thead>
            <th>순위</th>
            <th>제목</th>
            <th>관람객 수</th>
            <th>매출액</th>
            <th>누적 관람객 수</th>
            <th>누적 매출액</th>
          </thead>
          {/*data안의 boxOfficeResult안에 dailyBoxOfficeList  반복을 돌려야함 */}
          <tbody>
            {data &&
              data.boxOfficeResult.dailyBoxOfficeList.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.rank}</td>
                    <td>{v.movieNm}</td>
                    {/*toLocaleString= 숫자 세자리수 마다 ,를 찍어줌
                      Number=> 문자열을 형변환 시킴 */}
                    <td>{Number(v.audiCnt).toLocaleString()}명</td>
                    <td>{Number(v.salesAmt).toLocaleString()}원</td>
                    <td>{Number(v.audiAcc).toLocaleString()}명</td>
                    <td>{Number(v.salesAcc).toLocaleString()}원</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default MovieRank;
