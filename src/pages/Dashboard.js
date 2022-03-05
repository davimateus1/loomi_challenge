import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../assets/styles/DashboardContainerStyle";
import DashboardArea from "../components/DashboardArea";
import SidebarComponent from "../components/Sidebar";

const Dashboard = () => {
  const cookie = Cookies.get("token");
  const navigate = useNavigate();

  console.log(cookie);

  const isAuth = useCallback(() => {
    return cookie !== undefined;
  }, [cookie]);

  useEffect(() => {
    if (!isAuth()) {
      navigate("/");
    }
  });

  return (
    <Container>
      <SidebarComponent />
      <DashboardArea />
    </Container>
  );
};

export default Dashboard;
