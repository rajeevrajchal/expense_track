import CustomerLayout from '@hoc/customer.layout';
import Button from '@ui/partials/button';
import axios from 'axios';

import Cookies from 'cookies';

const Customer = () => {
  const handleRefreshToken = async () => {
    const res = await axios.post(
      '/api/auth/refresh_token',
      {},
      {
        withCredentials: true,
      }
    );
    console.log(res);
  };
  return (
    <CustomerLayout title={'John Doe'} description="jhon doe">
      <p>this is customer </p>
      <Button
        btn_type={'secondary'}
        label={'refresh token'}
        handleClick={() => handleRefreshToken()}
      />
    </CustomerLayout>
  );
};

export const getServerSideProps = async (context) => {
  const secure: boolean = process.env.NODE_ENV === 'production';
  const myCookies = new Cookies(context.req, context.res, { secure });
  const accessToken = await myCookies.get('ExpenseTrackingToken');
  const refreshToken = await myCookies.get('ExpenseTrackingRefreshToken');
  if (!accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      accessToken,
      refreshToken,
    },
  };
};

export default Customer;
