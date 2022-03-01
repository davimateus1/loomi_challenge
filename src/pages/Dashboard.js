import { Container } from "../assets/styles/DashboardContainerStyle";
import DashboardArea from "../components/DashboardArea";
import SidebarComponent from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Container>
      <SidebarComponent />
      <DashboardArea />
    </Container>
  );
};

export default Dashboard;
