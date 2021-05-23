import { NextPage } from 'next';
import { $CHILDREN } from '@utils/constant';
import HtmlHead from '@ui/shared/html.head';
import CNavbar from '@components/customer/containers/c.navbar';
import CFooter from '@components/customer/containers/c.footer';
import Drawer from '@components/customer/containers/c.drawer';
import { useState } from 'react';
import { ToastContainer } from 'react-toast';
import styles from './hoc.module.scss';

interface MainLayoutInterface {
  title?: string;
  description: string;
  children: $CHILDREN;
}

const CustomerLayout: NextPage<MainLayoutInterface> = (props) => {
  const { title, description, children } = props;
  const [drawer, setDrawer] = useState<boolean>(false);
  return (
    <>
      <HtmlHead title={title} description={description} />
      <main className={styles.customer}>
        <CNavbar setDrawer={setDrawer} />
        {drawer && (
          <>
            <div
              className={styles.backdrop}
              onClick={() => setDrawer(false)}
              key="close drawer"
            />
            <Drawer setDrawer={setDrawer} />
          </>
        )}
        <ToastContainer delay={3000} position="top-center" />
        {children}
        {!drawer && <CFooter />}
      </main>
    </>
  );
};
export default CustomerLayout;
