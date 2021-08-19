import Head from 'next/head';
import styles from '../../../styles/Core.module.css';
import { Header } from "../Header";
import { Footer } from '../Footer';
import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className={styles.container}>
        <Header/>
        <main className={styles.main}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
};
