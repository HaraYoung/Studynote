import React from "react";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

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
  //화면에 표시할  상태값(ajax연동 결과로 받아올 json)-> 초기값을 빈 배열로 정의함
  const [newsList, setNewsList] = React.useState([]);

  //현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = React.useState(false);

  //페이지가 처음 열렸을때 실행할 hook
  React.useEffect(() => {
    setLoading(true); //Ajax 로딩 시작을 표시

    setTimeout(() => {
      //로딩시간이 너무 빨라 예제에 딜레이 적용으로 확인
      (async () => {
        //즉시 실행 함수
        //let json= null; -
        try {
          const response = await axios.get("http://localhost:3001/news");
          //json= response.data; -

          setNewsList(newsList=> response.data);
        } catch (e) {
          console.error(e);
          alert("Ajax 연동 실패!!");
        } finally {
          //ajax 로딩이 종료됨을 표시- 로딩이미지 사라짐
          setLoading(false);
        }
        /*if(json!= null)setNewsList(json);}
          - ajax연동결과가 있다면 결과를 상태값에 적용*/
      })();
    }, 1000);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <ListContainer>
        {newsList.map((v, i) => (
          <NewsItem key={i} item={v} />
        ))}
      </ListContainer>
    </div>
  );
};

export default News;
