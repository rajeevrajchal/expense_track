import React from 'react';
import CustomerLayout from '@hoc/customer.layout';
import ReceiptList from '@components/customer/screens/receipt/receipt.list';

import Cookies from 'cookies';

const Receipts = () => {
  return (
    <CustomerLayout title={'John Doe'} description="jhon doe">
      <ReceiptList />
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

export default Receipts;
