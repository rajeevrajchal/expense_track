import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  faSignOutAlt,
  faArrowLeft,
  faShapes,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '@ui/partials/icon';
import { NextPage } from 'next';
import { $FIXME } from '@utils/constant';
import axios from 'axios';
import { toast } from 'react-toast';
import styles from './drawer.module.scss';

interface DrawerInterface {
  setDrawer: (obj: boolean) => void;
}

const Drawer: NextPage<DrawerInterface> = (props) => {
  const { setDrawer } = props;
  const router = useRouter();
  const user =
    typeof window !== 'undefined' &&
    JSON.parse(window.localStorage.getItem('login-user'));
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    setLoading(true);
    console.log('hello world');
    const res: $FIXME = await axios.post('/api/auth/logout');
    if (res) {
      await localStorage.removeItem('login-user');
      await localStorage.removeItem('ExpenseTrackingToken');
      await router.replace('/');
      toast.success('Logging Out SuccessFull!');
      setLoading(false);
    } else {
      toast.success('Logging Out Failed!');
    }
  };

  return (
    <div className={styles.drawer_menu}>
      <div className={styles.drawer_backdrop} />
      <div className={styles.top_notch}>
        <div className="icon" onClick={() => setDrawer(false)} key="back">
          <Icon icon={faArrowLeft} size="lg" />
        </div>
      </div>
      <div className={styles.user_basic_info}>
        <div className={styles.user_avatar}>
          <img
            src={
              user && user.avatar
                ? user.avatar
                : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            alt="user-avatar"
          />
        </div>
        <div className={styles.user_name}>
          <h3>{user ? user.name : ''}</h3>
        </div>
        <div className={styles.email}>
          <h3>{user && user ? user.email : ''}</h3>
        </div>
        <div className={styles.user_phone}>
          <h3>{user && user.phone ? user.phone : 'xxxxxxxxxx'}</h3>
        </div>
      </div>

      <div className={styles.drawer_menu_items}>
        <div className={`btn secondary ${styles.drawer_menu_item}`}>
          <Icon icon={faShapes} size="lg" />
          <h4>Category</h4>
        </div>
        <div className={`btn secondary ${styles.drawer_menu_item}`}>
          <Icon icon={faComment} size="lg" />
          <h4>FeedBack</h4>
        </div>
        <div
          className={`btn secondary ${styles.drawer_menu_item}`}
          onClick={() => handleLogout()}
          key="logout"
        >
          {loading ? (
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          ) : (
            <>
              <Icon icon={faSignOutAlt} size="lg" />
              <h4>Logout</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
