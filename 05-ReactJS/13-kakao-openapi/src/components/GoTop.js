import React, { memo } from "react";
import styled from "styled-components";

import btnTop from "../assets/img/btnTop.png";

const TopButton = styled.button`
  width: 50px;
  height: 50px;
  background: url(${btnTop}) center center no-repeat;
  background-size: 100% 100%; //주어진 width와 height안에서의 100%
  border: 0;
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 100;
`;

const GoTop = memo(() => {
  return (
    <div>
      <TopButton
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          //일반 화면구성(효과)에 관련된것은 바닐라JS를 사용
          //react로는 컴포넌트를 제어하거나 상태값을 관리,ajax 처리할때 사용
        }}
      />
    </div>
  );
});

export default GoTop;
