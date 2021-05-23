import styles from '@components/customer/screens/receipt/receipt.module.scss';
import Icon from '@ui/partials/icon';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import { useContext } from 'react';
import { ModalEnum } from '@ui/shared/modal/modal.enum';
import Modal from '@ui/shared/modal';
import { Context } from '@context/store';
import { closeModal, openModal } from '@ui/shared/modal/services/modal.action';
import 'react-calendar/dist/Calendar.css';
import { NextPage } from 'next';
import { $FIXME } from '@utils/constant';

interface ReceiptHeadingInterface {
  setPickedDate: (obj: string) => void;
  pickedDate: string;
}

const ReceiptHeading: NextPage<ReceiptHeadingInterface> = (props) => {
  const { setPickedDate, pickedDate } = props;
  const { state, dispatch } = useContext(Context);
  const handleChange = (e: $FIXME) => {
    setPickedDate(e);
    dispatch(closeModal());
  };
  return (
    <div className={styles.receipt_heading}>
      <h3>Expenses</h3>
      <div className={styles.receipt_heading_items}>
        <div className={styles.receipt_heading_item}>
          <div className={styles.title}>Today</div>
          {/* <div className={styles.icon}> */}
          {/*  <Icon icon={faCaretDown} size="lg" /> */}
          {/* </div> */}
        </div>
        <div className={styles.receipt_heading_item}>
          <div
            className={styles.icon}
            onClick={() =>
              dispatch(
                openModal({
                  mode: ModalEnum.other,
                })
              )
            }
          >
            <Icon icon={faCalendarAlt} size="lg" />
          </div>
        </div>
      </div>
      {state.modal.mode === ModalEnum.other && (
        <Modal title="Choose Filter Date">
          <div className="ma-md">
            <Calendar onChange={(e) => handleChange(e)} value={pickedDate} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ReceiptHeading;
