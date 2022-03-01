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
`
