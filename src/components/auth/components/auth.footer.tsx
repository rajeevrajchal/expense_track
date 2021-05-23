import AuthSocial from '@components/auth/components/auth.social';
import styles from '../auth.module.scss';

const AuthFooter = (props) => {
  const { setScreen, screen } = props;
  return (
    <>
      <AuthSocial />
      <div className={styles.auth_footer}>
        <div
          className={styles.register_button}
          onClick={() => setScreen(screen === 'login' ? 'register' : 'login')}
        >
          <h4>{screen === 'login' ? 'Sign up' : 'sign in'}</h4>
        </div>
        <div className={styles.forget_button}>
          <h4> Forget Password ? </h4>
        </div>
      </div>
    </>
  );
};

export default AuthFooter;
