import styles from '@components/customer/screens/receipt/receipt.module.scss';

const ReceiptItem = () => {
  return (
    <div className={styles.receipt_item}>
      <div className={styles.receipt_item_icon}>
        <img src="/svgs/taxi.svg" alt="item_images" />
      </div>
      <div className={styles.receipt_item_content}>
        <div className={styles.receipt_item_label}>
          <div className="title">Office Cab</div>
          <div className="sub-title">Travel</div>
        </div>
        <div className={styles.receipt_item_amount}>Rs: {1 * 5}</div>
      </div>
    </div>
  );
};

export default ReceiptItem;
