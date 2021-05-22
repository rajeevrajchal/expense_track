import styles from './receipt.module.scss'
import ReceiptItem from "@components/customer/screens/receipt/container/receipt_item";
import ReceiptHeading from "@components/customer/screens/receipt/container/receipt_heading";

const ReceiptList = () => {
    return (
        <section className={styles.receipt}>
            <ReceiptHeading/>
            <div className={styles.receipt_collection}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <ReceiptItem/>
                    ))
                }
            </div>
        </section>
    );
};

export default ReceiptList;
