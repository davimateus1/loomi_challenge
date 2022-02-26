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
  display: flex;
  flex-direction: column;
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

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -200px;
  opacity: 1;

  input[type="checkbox"] {
    width: 25px;
    height: 25px;
    border-radius: 25%;
    border: 1px solid #595f6e;
    appearance: none;
    outline: none;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background-color: #558b2f;
  }

  p {
    text-align: left;
    font-size: 17px;
    font-family: Roboto;
    color: #4d4f5c;
    margin-left: 8px;
    opacity: 1;
  }
`;
