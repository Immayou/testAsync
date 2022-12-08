import { Title } from 'components/ContactForm/ContactForm.styled';
import Typewriter from 'typewriter-effect';
import { useAuth } from '../../hooks/useAuth';
import { Layout } from '../Home/Home.styled';
import {
  HomePageTextIfLogged,
  HomePageText,
  HomePageTitle,
} from '../Home/Home.styled';

<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>;
export const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Layout>
        {!isLoggedIn ? (
          <>
            <HomePageTitle>Phonebook</HomePageTitle>
            <HomePageTextIfLogged>
              <Typewriter
                options={{
                  strings: ['Welcome', "Let's get started"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </HomePageTextIfLogged>
          </>
        ) : (
          <HomePageText>
            <Typewriter
              options={{
                strings: ['Phonebook'],
                autoStart: true,
                loop: true,
              }}
            />
          </HomePageText>
        )}
      </Layout>
    </>
  );
};
