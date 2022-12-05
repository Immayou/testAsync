import styled from '@emotion/styled';
import Feathers from '../../images/feathers.png';

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #c5dde8;
  background-image: url(${Feathers});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
  position: relative;
  width: 500px;
  margin: 50px auto 0;
  background: white;
  border-radius: 30px;
`;

export const WrapperLeft = styled.div`
  content: '';
  position: absolute;
  width: 50px;
  height: 20px;
  background: #c5dde8;
  border-radius: 20px;
  bottom: 60px;
  left: -30px;
  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background: white;

    top: 20px;
    left: 10px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background: white;

    top: -20px;
  }
`;

export const WrapperRight = styled.div`
  content: '';
  position: absolute;
  width: 50px;
  height: 20px;
  background: #c5dde8;
  border-radius: 20px;
  top: 60px;
  right: -30px;
  &:after {
    top: 20px;
    right: 10px;
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background: white;
  }
  &:before {
    top: -20px;
    right: 0;
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background: white;
  }
`;
export const WrapperCircle = styled.div`
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
`;

export const FormContent = styled.div`
  padding: 50px;
`;
export const FormTitle = styled.h3`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #707981;
  margin-bottom: 20px;
`;
export const FormLabel = styled.label`
  color: #707981;
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding-left: 0 0 0 10px;
  margin-bottom: 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const FormPasswordInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 40px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 40%;
  height: 40px;
  background: #c5dde8;
  border-bottom: 4px solid #eecfba;
  color: white;
  font-size: 18px;
  border-radius: 30px;
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
