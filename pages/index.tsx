import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Core.module.css";
import Link from 'next/link';
import { AppLayout } from "../components/core/layouts/AppLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Penboldt</title>
        <meta name="description" content="Twitter clone built with Next.js" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          <Link href="/"><a>Penboldt</a></Link>
        </h1>
      </AppLayout>
    </>
  );
};

export default Home;
