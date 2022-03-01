import {
  Container,
  LoginSection,
  Form,
  Check,
  Recover,
  Button,
  ErrorMessage,
} from "../assets/styles/LoginStyle";
import Leaf from "../assets/img/Leaf.png";

import OutlinedInput from "../components/Input/index.js";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticatedUser } from "../configs/requests/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setMessage("");
      if (user.length === 0 || pass.length === 0) {
        setMessage("Preencha todos os campos para continuar!");
        return;
      }

      const userAuthenticated = await authenticatedUser({
        email: user,
        password: pass,
      });

      if (userAuthenticated) {
        navigate("/dashboard");
      }
    },
    [user, pass, navigate]
  );

  return (
    <Container>
      <LoginSection>
        <img src={Leaf} alt="Logo" />
        <h1>Ola! faça seu login abaixo.</h1>
        <Form onSubmit={onSubmit}>
          <OutlinedInput value={user} setValue={setUser} label="Usuário" />
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
      {<ErrorMessage>{message}</ErrorMessage>}
    </Container>
  );
};

export default Login;
