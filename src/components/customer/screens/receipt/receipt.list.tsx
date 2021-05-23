import ReceiptItem from '@components/customer/screens/receipt/container/receipt.item';
import ReceiptHeading from '@components/customer/screens/receipt/container/receipt.heading';
import { NextPage } from 'next';
import { $FIXME } from '@utils/constant';
import { useContext, useEffect, useState } from 'react';
import { callApi } from '@plugins/call.axios';
import { toast } from 'react-toast';
import moment from 'moment';
import Button from '@ui/partials/button';
import { openModal } from '@ui/shared/modal/services/modal.action';
import { ModalEnum } from '@ui/shared/modal/modal.enum';
import { Context } from '@context/store';
import styles from './receipt.module.scss';

const ReceiptList: NextPage<$FIXME> = (props) => {
  const { accessToken } = props;
  const [pickedDate, setPickedDate] = useState<$FIXME>(new Date());
  const [expenses, setExpense] = useState<$FIXME>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useContext(Context);
  const getExpense = async () => {
    setLoading(true);
    const res: $FIXME = await callApi(
      'GET',
      `/api/expense/${moment(pickedDate).format('YYYY-MM-DD')}`,
      true,
      {},
      accessToken
    );
    if (res) {
      setExpense(res.data.expenses);
    } else {
      toast.error('Failed to fetch expense');
    }
    setLoading(false);
  };
  useEffect(() => {
    getExpense();
  }, [pickedDate]);
  return (
    <section className={styles.receipt}>
      <ReceiptHeading setPickedDate={setPickedDate} pickedDate={pickedDate} />
      {loading && <div className="box-center-all">Loading</div>}
      <div className={styles.receipt_collection}>
        {expenses.length ? (
          expenses.map((item: $FIXME) => (
            <ReceiptItem key={item._id} item={item} />
          ))
        ) : (
          <div className="box-center-all">
            <p>No Record</p>
            <p>Click here to add items.</p>
            <Button
              btnType="secondary"
              label="Add Expense"
              handleClick={() =>
                dispatch(
                  openModal({
                    mode: ModalEnum.add,
                  })
                )
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ReceiptList;
