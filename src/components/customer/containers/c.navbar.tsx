import Icon from '@ui/partials/icon';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NextPage } from 'next';
import styles from './customer.module.scss';

interface CNavbarInterface {
  setDrawer: (obj: boolean) => void;
}

const CNavbar: NextPage<CNavbarInterface> = (props) => {
  const { setDrawer } = props;
  const user =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('login-user'));
  return (
    <nav className={styles.customer_navbar}>
      <div className={styles.customer_name}>
        Hello, {user && user.name ? user.name : 'unknown'}
      </div>
      <div
        key="open drawer"
        className={styles.customer_accessible}
        onClick={() => setDrawer(true)}
      >
        <Icon icon={faUser} size="lg" />
      </div>
    </nav>
  );
};

export default CNavbar;
