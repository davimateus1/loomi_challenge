import styled from "styled-components";

import image from "../img/detailDashboard2.svg";
import image2 from "../img/detailDashboard1.svg";

export const Container = styled.div`
  background-color: #fff;
  opacity: 1;
  display: flex;
  width: 80vw left;
  height: 100vh;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  background-image: url(${image}), url(${image2});
  background-position: top left, bottom left;
  background-repeat: no-repeat;
`;

export const ButtonDash = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 200px;
  margin-left: 10px;
  color: black;
  width: 238px;
  height: 42px;
  background: rgba(85, 139, 47, 0.1);
  border-radius: 21px;
  border: none;
  cursor: pointer;

img {
    margin-left: 22px;
    width: 17px;
    height: 17px;
}

  p {
    margin-left: 18px; 
    font-family: Source Sans Pro;
    color: #558b2f;
    font-style: normal
    font-size: 16px;
    letter-spacing: 0.64px;
    text-transform: capitalize;
}
`;

export const Bar = styled.div`
  margin-top: 105%;
  margin-left: 20.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 210px;
  height: 0px;
  border: 1px solid #000000;
  opacity: 0.1;
`;

export const UserInfo = styled.div`
  margin: 5px 0px 0px 33px;

  h1 {
    margin-bottom: 0;
    font-size: 14px;
    text-align: left;
    font-family: Source Sans Pro;
    letter-spacing: 0.56px;
    color: #558b2f;
    text-transform: uppercase;
    opacity: 1;
  }
`;

export const UserPersonalInfos = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  p {
    margin-top: 1px;
    width: 98px;
    height: 20px;
    text-align: left;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.64px;
    color: #191b1d;
    opacity: 1;
  }
`;

export const ExitArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  cursor: pointer;

  img {
    opacity: 0.8;
  }

  p {
    text-align: left;
    font-family: Source Sans Pro;
    font-size: 17px;
    font-weight: normal 600;
    letter-spacing: 0.68px;
    color: #595f6e;
    text-transform: capitalize;
    opacity: 1;
    margin-left: 20px;
  }
`;
