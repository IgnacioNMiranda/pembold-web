import type { NextPage } from 'next';
import Head from 'next/head';
import { LogoSvg } from '../components/utils/svg';
import { AppLayout } from '../components/core/layouts';
import { AtLink } from '../components/core/atoms';
import styles from '@styles/pages/home.module.scss';
import { RedirectionTypes } from '../hooks/useNavigation';
import { Loading } from '../components/utils/icons';
import { useUser } from '../hooks';

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title key="title">Penboldt</title>
        <meta key="description" name="description" content="Twitter clone built with Next.js" />
      </Head>

      <AppLayout>
        {user === undefined && <Loading size="big" />}
        {user && <h1>Dashboard!</h1>}
        {user === null && (
          <>
            <h1 className={styles.title}>
              Penboldt
              <LogoSvg height={96} width={96} />
            </h1>
            <p className={styles.slogan}>Easily share dev experiences with yours 👨‍💻👩‍💻</p>
            <AtLink type="big" href={RedirectionTypes.REGISTER} label="Start now!" />
          </>
        )}
      </AppLayout>
    </>
  );
};

export default Home;
