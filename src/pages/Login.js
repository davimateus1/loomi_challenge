import { Container, LoginSection } from "../assets/styles/LoginStyle";
import Leaf from '../assets/img/Leaf.png'

const Login = () => {
  return (
    <Container>
        <LoginSection>
        <img src={Leaf} alt="Logo"/>
        <h1>Ola! faça seu login abaixo.</h1>
        </LoginSection>
    </Container>
  );
};

export default Login;
