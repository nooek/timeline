import { Button, ButtonContainer, FormContainer, FormInput, FormInputContainer, FormInputTag, FormInputsContainer } from "../defaultFormsComponents";
import { Title, TitleContainer } from "./styles";

const RegisterForm = ({ data, setData, signUp }) => {
  return (
    <FormContainer>
      <TitleContainer>
        <Title>Sign Up</Title>
      </TitleContainer>
      <FormInputsContainer>
        <FormInputContainer>
          <FormInputTag>Name</FormInputTag>
          <FormInput onChange={(e) => setData({ ...data, name: e.target.value})} />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputTag>Email</FormInputTag>
          <FormInput onChange={(e) => setData({ ...data, email: e.target.value})} />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputTag>Password</FormInputTag>
          <FormInput type="password" onChange={(e) => setData({ ...data, password: e.target.value})} />
        </FormInputContainer>
      </FormInputsContainer>
      <ButtonContainer>
        <Button onClick={() => signUp()}>Create Account</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default RegisterForm;
