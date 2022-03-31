import styled from "styled-components";

export const MainDiv = styled.div`
  /* :root {
    --bgColor: #04042a;
    --bgColorMiddle: #922c94;
    --bgColorLight: #e28790;
    --textColor: hsla(242, 86%, 88%, 1);
    --textColorDark: hsla(242, 36%, 0%, 1);
    --paperColor: #151d9e;
    --paperColorDark: hsla(242, 86%, 34%, 1);
    --shadowColorFaint: hsla(0, 0%, 0%, 0.2);
  } */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  audio {
    position: fixed;
    left: 10px;
    bottom: -10px;
    width: calc(100% - 20px);
  }

  input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
    margin-top: 2%;
    width: 300px;
    height: 75px;
    border-radius: 4px;

    background: black;
    color: white;
    font-size: 23px;
    font-weight: 700;
    box-shadow: 0 0px 60px black;
    transition: all 0.2s ease;
  }

  label:hover {
    transform: translate3d(0, 10%, 0);
  }

  label:active {
    transform: translate3d(0, 20%, 0);
  }
`;
