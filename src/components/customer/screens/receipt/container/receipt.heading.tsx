import styles from '@components/customer/screens/receipt/receipt.module.scss';
import Icon from '@ui/partials/icon';
import { faCaretDown, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ReceiptHeading = () => {
  return (
    <div className={styles.receipt_heading}>
      <h3>Expenses</h3>
      <div className={styles.receipt_heading_items}>
        <div className={styles.receipt_heading_item}>
          <div className={styles.title}>Today</div>
          <div className={styles.icon}>
            <Icon icon={faCaretDown} size="lg" />
          </div>
        </div>
        <div className={styles.receipt_heading_item}>
          <div className={styles.icon}>
            <Icon icon={faCalendarAlt} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptHeading;
