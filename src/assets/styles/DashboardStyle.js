import styled from "styled-components";

export const DashboardContainer = styled.div`
  background: linear-gradient(
    to top,
    rgba(85, 139, 47, 1),
    rgba(117, 152, 30, 1)
  );
  opacity: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const DashboardContentPlate = styled.div`
  background: rgba(245, 245, 245, 1);
  width: 86.5vw;
  height: 99vh;
  border-radius: 10px 10px 0 0;
  opacity: 1;
`;

export const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardHeaderInfos = styled.div`
  display: flex;

  h1 {
    margin-left: 30px;
    margin-top: 40px;
    text-align: left;
    font-family: Source Sans Pro;
    font-weight: normal bold;
    font-size: 28px;
    letter-spacing: 0.84px;
    color: #191b1d;
    text-transform: uppercase;
    opacity: 1;
  }

  h3 {
    margin-top: 32px;
    text-align: left;
    font-family: Source Sans Pro;
    font-weight: normal 600;
    font-size: 15px;
    letter-spacing: 0px;
    color: #1f1f1f;
    text-transform: lowercase;
  }

  span {
    color: #558b2f;
    font-family: Source Sans Pro;
    font-weight: normal 600;
    font-size: 28px;
    letter-spacing: 0px;
  }
`;

export const Bar = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 40px;
  height: 29px;
  border: 1px solid #7e8699;
  opacity: 1;
`;

export const DashboardHeaderBar = styled.div`
  width: 1565px;
  border: 1px solid #c7ccd8;
  opacity: 1;
  margin-left: 30px;
  margin-top: 20px;

  @media (max-width: 1280px) {
    width: 1040px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallCardArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border: 1px solid red;
  width: 183px;
  height: 132px;
  background-color: #ffffff;
  border-radius: 10px;
  opacity: 1;

  img {
    width: 24px;
    height: 26px;
    position: relative;
    top: -13px;
    left: 79.5px;
  }

  div {
    height: 26px;
  }

  h1 {
    margin-left: 15px;
    margin-top: -13px;
    text-align: left;
    font-family: Source Sans Pro;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.56px;
    color: #191b1d;
    opacity: 1;
  }

  span {
    font-size: 25px;
    letter-spacing: 1.28px;
    color: #191b1d;
    font-weight: 600;
  }
`;

export const EmptyIcon = styled.div`
  height: 26px;
`;

export const CardContent = styled.div`
  margin-top: 45px;
  margin-left: 15px;
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const CardLabel = styled.p`
  margin: 0;
  font-family: Source Sans Pro;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.48px;
  color: #191b1d;
`;

export const Percentage = styled.p`
  margin: 0;
  font-family: Helvetica;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0px;
  color: ${(props) => props.fontColor ? props.fontColor : '#191b1d'};
  opacity: 1;
`;
