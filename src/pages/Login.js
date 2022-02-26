import {
  Container,
  LoginSection,
  InputsContainer,
  Check,
} from "../assets/styles/LoginStyle";
import Leaf from "../assets/img/Leaf.png";

import OutlinedInput from "../components/InputComponent/index.js";
import { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Container>
      <LoginSection>
        <img src={Leaf} alt="Logo" />
        <h1>Ola! faça seu login abaixo.</h1>
        <InputsContainer>
          <OutlinedInput value={user} setValue={setUser} label="Usuário" />
          <OutlinedInput value={pass} setValue={setPass} label="Senha" />
          <Check>
            <input type="checkbox"/>
            <p>Lembrar-me</p>
          </Check>
        </InputsContainer>
      </LoginSection>
    </Container>
  );
};

export default Login;
