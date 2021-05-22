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

export default Receipts;
