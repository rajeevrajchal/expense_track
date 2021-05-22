import React from 'react';
import CustomerLayout from "@hoc/customer.layout";
import ReceiptList from "@components/customer/screens/receipt/receipt_list";

const Receipts = () => {
    return (
        <CustomerLayout title={"John Doe"} description="jhon doe">
            <ReceiptList/>
        </CustomerLayout>
    );
};

import Cookies from "cookies";

export const getServerSideProps = async (context) => {
    let secure = process.env.NODE_ENV === "production";
    const myCookies = new Cookies(context.req, context.res, {secure});
    const accessToken = await myCookies.get('ExpenseTrackingToken')
    const refreshToken = await myCookies.get('ExpenseTrackingRefreshToken')
    if (!accessToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    }
}

export default Receipts;
