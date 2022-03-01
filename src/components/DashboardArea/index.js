import {
  DashboardContainer,
  DashboardContentPlate,
  SmallCardArea,
} from "../../assets/styles/DashboardStyle";
import SmallCard from "./CardsDashboard";
import Header from "./HeaderDashboard";
import Finished from "../../assets/img/finished.svg";

const Data = [
  {
    icon: Finished,
    text: "Total de produtos",
    value: 97,
    label: "produtos",
    showPercentage: true,
    color: "#E00",
  },
];

const DashboardArea = () => {
  return (
    <DashboardContainer>
      <DashboardContentPlate>
        <Header />
        <SmallCardArea>
          {Data.map((item) => (
            <SmallCard
              color={item.color}
              icon={item.icon}
              text={item.text}
              value={item.value}
              label={item.label}
              showPercentage={item.showPercentage}
            />
          ))}
        </SmallCardArea>
      </DashboardContentPlate>
    </DashboardContainer>
  );
};

export default DashboardArea;
