import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  /*props로 넣어준 값을 직접 전달해줄수 있음 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background: gray;
  }

  /* inverted값이 true일때 특정 스타일을 부여함*/
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  &+ button {
    margin-left: 1rem;
  }
`;
const StyledComponents = () => (
  <Box color="black">
    <Button>안녕하세요!</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponents;
