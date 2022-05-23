import { createGlobalStyle } from "styled-components";

const GlobalStyle= createGlobalStyle`
  html,
  body {
    background-color: #eaebec;
    width: 100%;
    height: 100%;
    font-family: Dotum, "돋움", Helvetica, sans-serif;
    font-size: 12px;
    margin: auto;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  ul,
  li {
    list-style: none;
  }
`
export default GlobalStyle;