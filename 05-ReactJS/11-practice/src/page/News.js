import React from "react";
import styled from "styled-components";

import Spinner from "../components/Spinner";
import NewsItem from "../components/NewsItem";

//상태값을 로드하기위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";
//slice에 정의된 액션 함수들 참조
import { getList } from "../slice/NewsSlice";

//05-stylesheet단원의 '/components/NewsList.js'를 붙여넣기함
const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const News = () => {
  //컴포넌트가 마운트될때 콘솔의 모든 내용 삭제- 출력결과가 복잡해지는것을 방지
  React.useEffect(() => console.clear(), []);

  //hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  //컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 다스패치함
  React.useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <div>
          <h1> ERROR!! {error.code}</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <ListContainer>
          {data && data.map((v, i) => <NewsItem key={i} item={v} />)}
        </ListContainer>
      )}
    </div>
  );
};

export default News;
