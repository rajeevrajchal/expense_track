import { useRouter } from 'next/router';
import Input from '@ui/partials/input';
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@ui/partials/button';
import { useState } from 'react';
import { callApi } from '@plugins/call.axios';
import { loginUser } from '@components/auth/services/auth.action';
import { $FIXME } from '@utils/constant';
import { toast } from 'react-toast';
import styles from './auth.module.scss';

const Register = () => {
  const router = useRouter();
  const [isVisiblePassword, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      console.log('values', values);
      const res: $FIXME = await callApi('POST', 'auth/register', true, values);
      if (res) {
        const userRes: $FIXME = await loginUser(values);
        // eslint-disable-next-line no-unused-expressions
        (await typeof window) !== 'undefined' &&
          localStorage.setItem('login-user', JSON.stringify(userRes.user));
        // eslint-disable-next-line no-unused-expressions
        (await typeof window) !== 'undefined' &&
          localStorage.setItem(
            'ExpenseTrackingToken',
            JSON.stringify(userRes.token)
          );
        await router.replace(`/customer`);
        resetForm();
      } else {
        toast.error('Failed To Register.');
      }
      setLoading(false);
    },
  });

  return (
    <section className={styles.login_screen}>
      <div className={styles.login_form}>
        <div className="mt-md">
          <Input
            type="text"
            icon={faUser}
            name="name"
            placeholder="Your Name"
            value={formik.values.name}
            change={formik.handleChange}
          />
        </div>
        <div className="mt-md">
          <Input
            type="text"
            icon={faEnvelope}
            name="email"
            placeholder="Your Email"
            value={formik.values.email}
            change={formik.handleChange}
          />
        </div>
        <div className="mt-md">
          <Input
            type={isVisiblePassword ? 'text' : 'password'}
            icon={isVisiblePassword ? faEyeSlash : faEye}
            name="password"
            placeholder="********"
            value={formik.values.password}
            change={formik.handleChange}
            handleIconClick={() => setPasswordVisible(!isVisiblePassword)}
          />
        </div>
        <div className="mt-md flex flex-centered">
          <Button
            loading={loading}
            btnType="primary"
            label="Sign Up"
            handleClick={formik.handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
