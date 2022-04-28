import React from "react";
import styled from "styled-components";

const SideItem = styled.div`
  .side {
    width: 360px;
    flex: none;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;

    .container {
      padding: 20px;

      .fakeimg {
        background-color: #aaa;
        width: auto;
        padding: 20px;
        height: 60px;
        &:first-child{
          height: 200px;
        }
      }
    }
  }
`;

const Side = () => {
  return (
    <SideItem>
      <div className="side">
        <div className="container">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg">
            Image
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg">
            Image
          </div>
          <br />
          <div className="fakeimg">
            Image
          </div>
          <br />
          <div className="fakeimg">
            Image
          </div>
        </div>
      </div>
    </SideItem>
  );
};

export default Side;
