import React from "react";
import styled from "styled-components";

const MainItem = styled.div`
  .main {
    flex: 0 1 auto;
    background-color: white;
    border-right: 1px solid #d5d5d5;

    .container {
      padding: 20px;

      .fakeimg {
        background-color: #aaa;
        width: auto;
        padding: 20px;
        height: 200pxl;
      }
    }
  }
`;

const Main = () => {
  return (
    <MainItem>
      <div className="main">
        <div className="container">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className="fakeimg">Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <br />
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg">Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>
    </MainItem>
  );
};

export default Main;
