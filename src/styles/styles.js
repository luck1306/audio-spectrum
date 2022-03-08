import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none; // 드래그 방지
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background: -moz-linear-gradient(
        top,
        #04042a 0%,
        #922c94 50%,
        #e28790 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
        top,
        #04042a 0%,
        #922c94 50%,
        #e28790 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
        to bottom,
        #04042a 0%,
        #922c94 50%,
        #e28790 100%
    );
  }
`;

export default GlobalStyle;
