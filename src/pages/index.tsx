import Login from '@components/auth/login';
import SimpleLayout from '@hoc/simple.layout';
import AuthHeading from '@components/auth/components/auth.heading';
import AuthFooter from '@components/auth/components/auth.footer';

import Cookies from 'cookies';
import { useState } from 'react';
import Register from '@components/auth/register';

const Home = () => {
  const [screen, setScreen] = useState<string>('login');
  const getScreen = () => {
    switch (screen) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return <p>No Screen Exist</p>;
    }
  };
  return (
    <SimpleLayout title="Login" description="get login here ">
      <AuthHeading />
      {getScreen()}
      <AuthFooter setScreen={setScreen} screen={screen} />
    </SimpleLayout>
  );
};

export const getServerSideProps = async (context) => {
  const secure = process.env.NODE_ENV === 'production';
  const myCookies = new Cookies(context.req, context.res, { secure });
  const accessToken = await myCookies.get('ExpenseTrackingToken');

  if (accessToken) {
    return {
      redirect: {
        destination: '/customer',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Home;
