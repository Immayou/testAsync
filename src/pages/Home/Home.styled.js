import styled from '@emotion/styled';
import HomeWrapper from '../../images/homePageWrapper.jpg';
import HomeImm from '../../images/WelcomeImage.jpg';
import Imm from '../../images/wrapper.jpg';

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 100vh;
  background-image: url(${Imm});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  :before {
    content: '';
    background-image: url(${Imm});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    width: 80%;
    height: 50%;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-filter: blur(10px);
    filter: blur(1px);
  }
`;

export const HomePageTextIfLogged = styled.div`
  position: absolute;
  top: 30%;
  right: 40%;
  transform: translate(-50%, -50%);
  display: block;
  width: 200px;
  text-align: center;
  font-size: 70px;
  letter-spacing: 0.1ch;
  color: #ffffff;
  text-transform: uppercase;
`;

export const HomePageText = styled.div`
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 200px;
  font-size: 90px;
  letter-spacing: 0.1ch;
  color: #000000;
  text-transform: uppercase;
`;

export const HomePageTitle = styled.h1`
  margin: 30px auto 0 auto;
  display: block;
  /* width: 200px; */
  text-align: center;
  font-size: 70px;
  letter-spacing: 0.1ch;
  color: #000000;
  text-transform: uppercase;
`;
