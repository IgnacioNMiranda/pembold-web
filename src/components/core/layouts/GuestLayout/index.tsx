import Head from 'next/head';
import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

export const GuestLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
