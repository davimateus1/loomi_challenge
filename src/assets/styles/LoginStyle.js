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
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.8px;
    font-size: 20px;
    color: #595f6e;
    opacity: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-right: 220px;
  opacity: 1;

  input[type="checkbox"] {
    width: 25px;
    height: 25px;
    border-radius: 35%;
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

export const Recover = styled.div`
  margin-top: 6px;
  letter-spacing: 0px;
  color: #558b2f;
  font-weight: normal;
  font-family: Roboto;
  font-size: 16px;
  text-decoration: underline #558b2f;
  cursor: pointer;
`;

export const Button = styled.button`
  margin-top: 5px;
  border-radius: 22px;
  opacity: 1;
  width: 330px;
  height: 39px;
  cursor: pointer;
  background-color: #558b2f;
  border: none;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.64px;
  text-transform: capitalize;
  color: #ffffff;
  opacity: 1;
`;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: red;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.8px;
`;
