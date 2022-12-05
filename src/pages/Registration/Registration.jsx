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

export const Registration = () => {
  return (
    <>
      <main>
        <Layout>
          <Form>
            <WrapperLeft></WrapperLeft>
            <WrapperRight></WrapperRight>
            <WrapperCircle></WrapperCircle>
            <FormContent>
              <FormTitle>Let's register</FormTitle>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" id="name" />
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
