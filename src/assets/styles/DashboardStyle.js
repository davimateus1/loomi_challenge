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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    margin-top: 20px;
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
    margin-top: 12px;
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
  margin-top: 23px;
  height: 29px;
  border: 1px solid #7e8699;
  opacity: 1;
`;

export const DashboardHeaderBar = styled.div`
  width: 1565px;
  border: 1px solid #c7ccd8;
  opacity: 1;
  margin-left: 30px;

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
  margin-top: 15px;
  width: 100%;
  height: 145px;
`;

export const Card = styled.div`
  margin-top: 13px;
  margin-left: 11px;
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

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 120px;
    height: 100px;

    h1 {
      margin-left: 15px;
      margin-top: -18px;
      text-align: left;
      font-family: Source Sans Pro;
      font-size: 10px;
    }

    img {
      width: 24px;
      height: 26px;
      position: relative;
      top: -15px;
      left: 49.5px;
    }

    span {
      font-size: 16px;
      letter-spacing: 1.28px;
      color: #191b1d;
      font-weight: 600;
    }
  }
`;

export const EmptyIcon = styled.div`
  height: 26px;
`;

export const CardContent = styled.div`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "")};
  display: flex;
  margin-left: 15px;
  align-items: baseline;
`;

export const CardLabel = styled.p`
  margin: 0;
  margin-left: 10px;
  font-family: Source Sans Pro;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.48px;
  color: ${(props) => (props.fontColor ? props.fontColor : "#191b1d")};

  @media (min-width: 1280px) and (max-width: 1440px) {
    margin-left: 1px;
  }
`;

export const Percentage = styled.p`
  padding-left: 15px;
  margin: 0;
  font-family: Helvetica;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0px;
  color: ${(props) => (props.fontColor ? props.fontColor : "#191b1d")};
  opacity: 1;

  @media (min-width: 1280px) and (max-width: 1440px) {
    padding-left: 3px;
    font-size: 12px;
  }
`;

export const GraphicStatus = styled.div`
  width: 373px;
  flex-direction: column;

  @media (min-width: 1280px) and (max-width: 1440px) {
    margin-left: 10px;
    width: 350px;
  }
`;

export const ChartArea = styled.div`
  margin-top: 8px;
  width: 373px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 98%;
    padding-top: 10px;
    margin-left: 15px;
    font-family: Source Sans Pro;
    font-weight: normal 600;
    font-size: 18px;
    letter-spacing: 0.72px;
    color: #191b1d;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 330px;
    height: 190px;
  }
`;

export const ChartsPie = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AreaChartByPhase = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  width: 383px;
  height: 407px;
  background-color: #ffffff;
  margin-top: 8px;
  margin-left: 8px;

  h1 {
    display: flex;
    justify-content: flex-start;
    width: 98%;
    display: flex;
    margin-left: 15px;
    margin-bottom: 50px;
    font-family: Source Sans Pro
    font-weight: normal 600;
    font-size: 18px;
    letter-spacing: 0.72px;
    color: #191b1d;
    opacity: 1;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 383px;
    height: 390px;
    margin-left: -10px;
  }
`;

export const BarChartArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8px;
  background-color: #ffffff;
  width: 765px;
  height: 250px;
  border-radius: 10px;
  
  h1 {
    width: 98%;
    text-align: start;
    padding-top: 10px;
    display: flex;
    margin-left: 15px;
    font-family: Source Sans Pro
    font-weight: normal 600;
    font-size: 18px;
    letter-spacing: 0.72px;
    color: #191b1d;
    opacity: 1;
  }
`;

export const ContentInformations = styled.div`
  display: flex;
  width: 94%;
  margin-left: 27px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: auto;

  @media (min-width: 1280px) and (max-width: 1440px) {
    margin-left: 120px;
  }
`;

export const TotalCharts = styled.div`
  display: flex;
  width: 48%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: auto;
`;

export const TableArea = styled.div`
  margin-top: 10px;
  background-color: #ffffff;
  width: 50%;
  height: 670px;
  border-radius: 10px;

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 30%;
    margin-right: 100px;
  }
`;

export const Table = styled.table`
  font-weight: bold;
  border-collapse: collapse;
  width: 98%;
  margin-left: 1%;
  text-align: left;
  font-family: Source Sans Pro;
  font-size: 14px;
  letter-spacing: 0.56px;

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 98%;
    font-size: 12px;
  }
`;

export const TableRow = styled.div`
  color: #595f6e;
  border-radius: 10px;
  display: flex;
  width: 100%;
  background-color: ${(props) =>
    props.BackgroundColor ? props.BackgroundColor : "inherit"};
  td {
    padding-left: 15px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding-left: 15px;
  color: ${(props) => (props.fontColor ? props.fontColor : "##595F6E")};
  width: ${(props) => (props.width ? props.width : "50px")};
`;

export const TableColumn = styled(TableHeader)`
  font-weight: ${(props) => (props.FontWeight ? props.FontWeight : "bold")};
`;

export const TitleTable = styled.h1`
  padding-bottom: 10px;
  border-bottom: 3px solid #558b2f;
  width: 75px;
  margin-left: 15px;
  text-align: left;
  font-family: Source Sans Pro;
  font-weight: normal 600;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #191b1d;
  opacity: 1;
`;

export const TableBar = styled.div`
  margin-top: -14.5px;
  margin-bottom: 20px;
  left: 1106px;
  width: 100%;
  border: 1px solid #c7ccd8 !important;
  opacity: 0.5;

  @media (min-width: 1280px) and (max-width: 1440px) {
    margin-top: -14.5px;
    margin-bottom: 5px;
  }
`;

export const Select = styled.select`
  margin-left: 8px;
  margin-bottom: 20px;
  width: 300px;
  height: 48px;
  background-color: transparent;
  border: 1px solid #558b2f;
  border-radius: 8px;

  text-align: left;
  font-family: Source Sans Pro;
  font-weight: normal 600;
  font-size: 16px;
  letter-spacing: 0.64px;
  color: #595f6e;
  padding-left: 10px;
  opacity: 1;

  :focus {
    box-shadow: 0 0 0 0;
    border: 1px solid #558b2f;
    outline: 0;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 200px;
    height: 38px;

    margin-left: 8px;
    margin-bottom: 5px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-family: Source Sans Pro;
  font-weight: normal 600;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #558b2f;
  opacity: 1;
  margin-left: 9px;
`;
