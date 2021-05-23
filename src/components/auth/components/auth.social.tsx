import styles from '../auth.module.scss';

const AuthSocial = () => {
  return (
    <div className={styles.auth_social}>
      <div className="text">
        <h4>OR</h4>
      </div>
      <div className={styles.social_media}>
        <div className={styles.social_media_item}>
          <img src="./svgs/google.svg" alt="google" />
        </div>
      </div>
    </div>
  );
};

export default AuthSocial;
