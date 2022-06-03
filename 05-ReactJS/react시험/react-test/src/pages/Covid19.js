import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/Covid19Slice";
import styled from "styled-components";
import dayjs from "dayjs";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

/**
 * 버튼 클릭시 input태그의 날짜값을 버튼을 통해 전달후 메뉴(필드)를 선택할수 있는 영역이
 * 나타나며 메뉴 클릭시 그래프가 나옴
 * 처음 검색 결과화면은 일일확진자 데이터를 보여줌 
 */

const Covid19 = memo(() => {
    //필드명
    const {api}= useParams();
    //lte=최대값, gte=최소값
    const {query, gte, lte} = useQueryString();
  const { data, loading, error } = useSelector((state) => state.covid19);
  const dispatch = useDispatch();

  console.log('api:'+api);

  //컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 다스패치함
  React.useEffect(() => {
    dispatch(getList({
      api: api,
      query: query,
      gte:gte,
      lte:lte
    }
    )); //slice안의 ajax기능을 호출하고 싶다면 dispatch에 그 함수를 연결
    //ajax연동기능을 실행-> 리턴-ajax처리 결과가 useSelector를 통해 각 상태값으로 전파
  }, [dispatch, gte, lte ,api, query]);
  
  // const [gte, setGte]= React.useState(
  //     dayjs().format('YYYY-MM-DD')
  // );
  // const getContent= React.useEffect(() => {
  //   dispatch(getList({ 
  //       //minNum: minNum.replaceAll("-", "") 
  //       query: query,
  //       gte: gte,
  //       lte: lte
  //   }));
  // }, [dispatch, setGte]);



  // const [lte, setLte] = React.useState(
  //   dayjs().add(-1, "d").format("YYYY-MM-DD")   //하루 전날 값이 필요
  // );

  const onDateChange = React.useCallback((e) => {
    e.preventDefault();
    //선택값으로 상태값을 갱신-> React.useEffect()에 의해 액션함수가 디스패치됨
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
       data.map((v, i) => (
          <div>
             <div key={i}>
              <p>{v.date}</p>
              <p>{v.active}</p>

            </div> 
          </div>

        )
        ))
      )}
    </div>
  );
});

export default Covid19;
