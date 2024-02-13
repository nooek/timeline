import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import { Container, Logo, LogoContainer, MainContainer, Error } from "./styles";
import axios from "axios";
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom'
import { useUserData } from '../../store/userContext';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();
  const { setUser } = useUserData()
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies();

  const signIn = () => {
    axios
      .get("http://localhost:8080/user/login", {
        params: {
            email: data.email,
            password: data.password,
        }
      })
      .then((res) => {
        console.log("NAVIGATING")
        setUser({ name: res.data.name, email: res.data.email })
        setCookie("user", JSON.stringify(res.data))
        navigate(`/`);
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data.error)
        }
        console.log(err.response);
      });
    console.log("SIGNING UP");
  };

  return (
    <Container>
      <MainContainer>
        <LogoContainer>
          <Logo src="/logo2.svg" />
        </LogoContainer>
        <LoginForm data={data} setData={setData} signIn={signIn} />
        <Error>{errorMessage}</Error>
      </MainContainer>
    </Container>
  );
};

export default Login;
