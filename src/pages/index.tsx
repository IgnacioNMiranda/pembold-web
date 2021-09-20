import type { NextPage } from 'next';
import Head from 'next/head';
import { LogoIcon, Loading } from '../components/utils/icons';
import { TmApp } from '../components/core/templates';
import { AtLink } from '../components/core/atoms';
import styles from '@styles/pages/home.module.scss';
import { RedirectionTypes, useUser } from '../hooks';

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title key="title">Penboldt</title>
        <meta key="description" name="description" content="Twitter clone built with Next.js" />
      </Head>

      <TmApp>
        {user === undefined && <Loading size="big" />}
        {user && <h1>Dashboard!</h1>}
        {user === null && (
          <>
            <h1 className={styles.title}>
              Penboldt
              <LogoIcon height={96} width={96} />
            </h1>
            <p className={styles.slogan}>Easily share dev experiences with yours</p>
            <AtLink type="big" color="secondary" href={RedirectionTypes.REGISTER} label="Start now!" />
          </>
        )}
      </TmApp>
    </>
  );
};

export default Home;
