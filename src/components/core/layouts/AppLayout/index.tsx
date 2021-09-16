import Head from 'next/head';
import { OrHeader, OrFooter } from '../../organisms';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <OrHeader />
        <div>
          <main className={styles.main}>{children}</main>
        </div>
        <OrFooter />
      </div>
    </>
  );
};
