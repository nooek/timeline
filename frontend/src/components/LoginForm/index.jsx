import {
  Button,
  ButtonContainer,
  FormContainer,
  FormInput,
  FormInputContainer,
  FormInputTag,
  FormInputsContainer,
} from "../defaultFormsComponents";
import { Title, TitleContainer } from "./styles";

const LoginForm = ({ data, setData, signIn }) => {
  return (
    <FormContainer>
      <TitleContainer>
        <Title>Sign In</Title>
      </TitleContainer>
      <FormInputsContainer>
        <FormInputContainer>
          <FormInputTag>Email</FormInputTag>
          <FormInput onChange={(e) => setData({...data, email: e.target.value})} />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputTag>Password</FormInputTag>
          <FormInput type="password" onChange={(e) => setData({...data, password: e.target.value})} />
        </FormInputContainer>
      </FormInputsContainer>
      <ButtonContainer>
        <Button onClick={() => signIn()}>Log In</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default LoginForm;
