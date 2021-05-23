import { NextPage } from 'next';
import { $CHILDREN } from '@utils/constant';
import HtmlHead from '@ui/shared/html.head';
import { ToastContainer } from 'react-toast';
import styles from './hoc.module.scss';

interface MainLayoutInterface {
  title?: string;
  description: string;
  children: $CHILDREN;
}

const SimpleLayout: NextPage<MainLayoutInterface> = (props) => {
  const { title, description, children } = props;
  return (
    <>
      <HtmlHead title={title} description={description} />
      <main className={styles.simple_layout}>
        <ToastContainer delay={3000} position="top-center" />
        {children}
      </main>
    </>
  );
};

export default SimpleLayout;
