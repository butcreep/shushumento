import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export default createGlobalStyle`
    ${reset}
    *{
      box-sizing: border-box;
      list-style:none ;
      font-family: 'Noto Sans KR', sans-serif;
      letter-spacing: -1px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    img{
      display:block ;
      width:100% ;
    }
`;
