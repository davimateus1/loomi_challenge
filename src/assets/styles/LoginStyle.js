import styled from "styled-components";
import image from "../img/decoration.svg";
import image2 from "../img/decorationTwo.svg";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${image}), url(${image2});
  background-position: top left, bottom right;
  background-repeat: no-repeat;
`;

export const LoginSection = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;

  h1 {
    width: 461px;
    height: 46px;
    margin-top: 78.57px;
    font-family: Source Sans Pro;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.8px;
    font-size: 20px;
    color: #595f6e;
    opacity: 1;
  }
`;
