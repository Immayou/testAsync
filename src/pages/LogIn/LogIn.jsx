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
  return (
    <>
      <main>
        <Layout>
          <Form>
            <WrapperLeft></WrapperLeft>
            <WrapperRight></WrapperRight>
            <WrapperCircle></WrapperCircle>
            <FormContent>
              <FormTitle>Let's log in</FormTitle>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput type="text" id="email" />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormPasswordInput type="email" id="password" />
              <FormButton type="submit">Ok</FormButton>
            </FormContent>
          </Form>
        </Layout>
      </main>
    </>
  );
};
