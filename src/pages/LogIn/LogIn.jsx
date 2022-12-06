import { useDispatch } from 'react-redux';
import { login } from '../../redux/authOperations';
import {
  Form,
  WrapperLeft,
  WrapperRight,
  WrapperCircle,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  FormPasswordInput,
  FormButton,
  Layout,
} from '../LogIn/LogIn.styled';

export const LogIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <main>
        <Layout>
          <Form onSubmit={handleSubmit}>
            <WrapperLeft></WrapperLeft>
            <WrapperRight></WrapperRight>
            <WrapperCircle></WrapperCircle>
            <FormContent>
              <FormTitle>Let's log in</FormTitle>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput type="text" id="email" name="email" />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormPasswordInput
                type="password"
                id="password"
                name="password"
              />
              <FormButton type="submit">Ok</FormButton>
            </FormContent>
          </Form>
        </Layout>
      </main>
    </>
  );
};
