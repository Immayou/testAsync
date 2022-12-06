import { Wrapper } from '../Home/Home.styled';
import MainWrapper from '../../images/wrapper.jpg';

export const Home = () => {
  return (
    <>
      <div>
        {/* <img
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100px',
            height: '100px',
          }}
          src={MainWrapper}
          alt="feather"
        /> */}
        <h1>Welcome to your Phonebook</h1>
        <p>Let's get started</p>
      </div>
    </>
  );
};
