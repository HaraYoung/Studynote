import React from "react";
import Header from "./Header";
import Content from "./Content";
import Main from "./Main";
import Footer from "./Footer";

const Container = () => {
  return (
    <div id="container">
      <Header></Header>
      <hr />
      <Content></Content>
      <hr />
      <Main></Main>
      <hr />
      <Footer></Footer>
    </div>
  );
};
export default Container;
