import CustomerLayout from '@hoc/customer.layout';
import Cookies from 'cookies';

const Stats = () => {
  return (
    <CustomerLayout title="John Doe" description="jhon doe">
      <p> this is stats </p>
    </CustomerLayout>
  );
};

export const getServerSideProps = async (context) => {
  const secure = process.env.NODE_ENV === 'production';
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
export default Stats;
