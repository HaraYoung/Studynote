import React from "react";
import Side from '../component/Side';
import Main from "../component/Main";
import styled from "styled-components";

const ContentItems= styled.div`
    max-width: 1200px;
    margin: auto;
    background-color: #eee;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;

const Content=() => {
  return (
    <ContentItems>
        <Side/>
        <Main/>
    </ContentItems>
  );
};

export default Content;
