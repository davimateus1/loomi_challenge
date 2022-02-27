import {
  Container,
  LoginSection,
  Form,
  Check,
  Recover,
  Button,
} from "../assets/styles/LoginStyle";
import Leaf from "../assets/img/Leaf.png";

import OutlinedInput from "../components/InputComponent/index.js";
import { useState } from "react";
import axios from "axios";
import { BaseURL } from "../assets/utils/BaseURL";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${BaseURL}/ps/login`,
      data: {
        email: user,
        password: pass,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <LoginSection>
        <img src={Leaf} alt="Logo" />
        <h1>Ola! faça seu login abaixo.</h1>
        <Form onSubmit={onSubmit}>
          <OutlinedInput 
            value={user} 
            setValue={setUser} 
            label="Usuário" 
          />
          <OutlinedInput
            value={pass}
            setValue={setPass}
            label="Senha"
            type="password"
          />
          <Check>
            <input type="checkbox" />
            <p>Lembrar-me</p>
          </Check>
          <Recover>
            <p>Esqueci minha senha</p>
          </Recover>
          <Button type="submit">Entrar</Button>
        </Form>
      </LoginSection>
    </Container>
  );
};

export default Login;
