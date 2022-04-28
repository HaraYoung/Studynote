import React from "react";
import { Helmet } from "react-helmet";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./page/Content";

function App() {
  const AppStyles= {
    fontFamily: 'Noto Sans KR',
    margin: '0',
    padding: '0'
  }
  return (
    <div style={AppStyles}>
      <Helmet>
        <meta charset="utf-8" />
        <title>22.04.28- 연습문제</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      

      <Header/>
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;
