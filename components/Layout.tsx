import { ReactElement } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from '@/styles/Layout.module.scss';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
