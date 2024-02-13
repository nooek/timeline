import { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { Container, Logo, LogoContainer, MainContainer, Error } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../store/userContext";

const Register = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("")
  const { user, setUser } = useUserData()
  const navigate = useNavigate();

  const signUp = () => {
    axios
      .post("http://localhost:8080/user", {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        setUser(res.data)
        navigate(`/login`);
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data.error)
        }
        console.log(err.response);
      });
    console.log("SIGNING UP");
  };

  console.log(user)

  return (
    <Container>
      <MainContainer>
        <LogoContainer>
          <Logo src="/logo2.svg" />
        </LogoContainer>
        <RegisterForm data={data} setData={setData} signUp={signUp} />
        <Error>{errorMessage}</Error>
      </MainContainer>
    </Container>
  );
};

export default Register;
