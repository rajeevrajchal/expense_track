import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import Input from '@ui/partials/input';
import { faReceipt, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Button from '@ui/partials/button';
import Select from '@ui/partials/select';
import { callApi } from '@plugins/call.axios';
import { $FIXME } from '@utils/constant';
import { Context } from '@context/store';
import { closeModal } from '@ui/shared/modal/services/modal.action';
import { toast } from 'react-toast';
import moment from 'moment';
import styles from './expense.module.scss';

const AddExpense = () => {
  const { dispatch } = useContext(Context);
  const accessToken =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('ExpenseTrackingToken'));
  const user: $FIXME =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('login-user'));
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      date: moment().unix(),
      amount: '',
      user_id: user._id,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('name is required'),
      category: Yup.string().required('category is required'),
      amount: Yup.string().required('price is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      const res: $FIXME = await callApi(
        'POST',
        '/api/expense',
        true,
        values,
        accessToken
      );
      if (res) {
        resetForm();
        toast.success('Expense stored successfully');
        dispatch(closeModal());
      } else {
        toast.error('Expense failed to stored.');
      }
      setLoading(false);
    },
  });
  return (
    <div className={styles.expense}>
      <div className="expense_form mt-md">
        <div className="mt-md">
          <Input
            type="text"
            icon={faReceipt}
            name="name"
            placeholder="Name of expenses"
            value={formik.values.name}
            change={formik.handleChange}
            isError={formik.touched.name}
            error={formik.errors.name}
          />
        </div>
        <div className="mt-md">
          <Select
            name="category"
            value={formik.values.category}
            change={formik.handleChange}
            isError={formik.touched.category}
            error={formik.errors.category}
            options={[
              {
                label: 'electronics',
                value: 'electronics',
              },
              {
                label: 'foods',
                value: 'foods',
              },
            ]}
          />
        </div>
        <div className="mt-md">
          <Input
            type="number"
            icon={faDollarSign}
            name="amount"
            placeholder="amount of expenses"
            isError={formik.touched.amount}
            error={formik.errors.amount}
            value={formik.values.amount}
            change={formik.handleChange}
          />
        </div>
        <div className="flex flex-centered">
          <div className="pa-md">
            <Button
              btnType="secondary"
              label="Clear"
              handleClick={formik.handleSubmit}
            />
          </div>
          <div className="pa-md">
            <Button
              loading={loading}
              btnType="primary"
              label="Save"
              handleClick={formik.handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
