import { useEffect, useState } from "react";
import axios from "axios";

import {
  Bar,
  ButtonDash,
  ExitArea,
  Sidebar,
  UserInfo,
  UserPersonalInfos,
} from "../../assets/styles/DashboardStyle";

import { BaseURL } from "../../assets/utils/BaseURL";

import Dash from "../../assets/img/dashboard.svg";
import Exit from "../../assets/img/exit.svg";
import { useNavigate } from "react-router-dom";

const SidebarComponent = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const ExitDashboard = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${BaseURL}/ps/me`,
    })
      .then((response) => {
        const res = response.data.data;
        setName(res.name);
        setAvatar(res.avatar);
        localStorage.setItem("name", name);
        localStorage.setItem("avatar", avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name, avatar]);

  return (
    <Sidebar>
      <ButtonDash>
        <img src={Dash} alt="Dashboard Icon" />
        <p>Dashboard</p>
      </ButtonDash>
      <Bar />
      <UserInfo>
        <h1>Programador</h1>
        <UserPersonalInfos>
          {/* <img src={avatar} alt="User avatar" /> */}
          <p>{name}</p>
        </UserPersonalInfos>
        <ExitArea onClick={ExitDashboard}>
          <img src={Exit} alt="Sair" />
          <p>Sair</p>
        </ExitArea>
      </UserInfo>
    </Sidebar>
  );
};

export default SidebarComponent;
