import Cookies from "js-cookie";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userInformations } from "../../configs/requests/userInformations";

import Dash from "../../assets/img/dashboard.svg";
import Exit from "../../assets/img/exit.svg";
import Spinner from "../Spinner";

import {
  Bar,
  ButtonDash,
  CompanyArea,
  ExitArea,
  Sidebar,
  UserInfo,
  UserPersonalInfos,
} from "../../assets/styles/SidebarStyle";

const SidebarComponent = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const ExitDashboard = () => {
    localStorage.clear();
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    navigate("/");
  };

  const getUserInformations = useCallback(async () => {
    const userData = await userInformations();

    if (userData) {
      const { name: nameResponse, avatar: avatarResponse } = userData.data;
      setName(nameResponse);
      setAvatar(avatarResponse);
      localStorage.setItem("name", nameResponse);
      localStorage.setItem("avatar", avatarResponse);
      setLoading(false);
    }
  }, [setName, setAvatar]);

  useEffect(() => {
    getUserInformations();
  }, [getUserInformations]);

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
          {loading ? (
            <Spinner size={10} />
          ) : (
            <>
              <img src={avatar} alt="User avatar" />
              <p>{name}</p>
            </>
          )}
        </UserPersonalInfos>
        <ExitArea onClick={ExitDashboard}>
          <img src={Exit} alt="Sair" />
          <p>Sair</p>
        </ExitArea>
        <CompanyArea>
          <p>Uma plataforma</p>
          <h3>New Wave</h3>
        </CompanyArea>
      </UserInfo>
    </Sidebar>
  );
};

export default SidebarComponent;
