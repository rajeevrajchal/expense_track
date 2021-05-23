import ReceiptItem from '@components/customer/screens/receipt/container/receipt.item';
import ReceiptHeading from '@components/customer/screens/receipt/container/receipt.heading';
import styles from './receipt.module.scss';

const ReceiptList = () => {
  return (
    <section className={styles.receipt}>
      <ReceiptHeading />
      <div className={styles.receipt_collection}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <ReceiptItem />
        ))}
      </div>
    </section>
  );
};

export default ReceiptList;
