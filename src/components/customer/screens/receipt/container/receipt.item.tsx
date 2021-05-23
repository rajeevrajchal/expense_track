import styles from '@components/customer/screens/receipt/receipt.module.scss';
import { NextPage } from 'next';
import { $FIXME } from '@utils/constant';

const ReceiptItem: NextPage<$FIXME> = (props) => {
  const { item } = props;
  return (
    <div className={styles.receipt_item}>
      <div className={styles.receipt_item_icon}>
        <img src="/svgs/taxi.svg" alt="item_images" />
      </div>
      <div className={styles.receipt_item_content}>
        <div className={styles.receipt_item_label}>
          <div className="title">{item.name}</div>
          <div className="sub-title">{item.category}</div>
        </div>
        <div className={styles.receipt_item_amount}>Rs: {item.amount}</div>
      </div>
    </div>
  );
};

export default ReceiptItem;
