import {
  Card,
  CardContent,
  CardLabel,
  EmptyIcon,
  Percentage,
} from "../../../assets/styles/DashboardStyle";

const SmallCard = ({ icon, value, text, label, showPercentage, color }) => {
  return (
    <Card>
      {icon !== null ? <img src={icon} alt={text} /> : <EmptyIcon />}
      <h1>{text}</h1>
      <CardContent>
        <span style={{ color: color}}>{value}</span>
        <CardLabel fontColor={color}>{label}</CardLabel>
        {showPercentage ? <Percentage> {value}% </Percentage> : ""}
      </CardContent>
    </Card>
  );
};

export default SmallCard;
