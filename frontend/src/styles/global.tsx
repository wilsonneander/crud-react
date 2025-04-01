import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-wrap: break-word;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif;
  }
  
  body {
    min-height: 100%;
    background-color: #ffffff;
  }
  
  a {
    color: #5469d4;
    text-decoration: unset;
  }
  
  /* Corrigindo o problema de cores no Grid */
  table, th, td, h2, div {
    color: #1a1f36 !important;
  }
  
  @keyframes animationLeftRight {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(0px);
    }
  } 

  @keyframes animationRightLeft {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`

export default GlobalStyle

