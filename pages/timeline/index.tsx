import styles from '../../styles/Core.module.css';
import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "../../components/core/layouts/AppLayout";

interface TimeLinePageProps {
  userName: string;
}

const TimeLine: NextPage<TimeLinePageProps> = ({ userName }) => {
  return (
    <>
      <Head>
        <title>Penboldt - Timeline</title>
        <meta name="description" content="Timeline of Twittus"/>
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          Timeline de {userName}
        </h1>
      </AppLayout>
    </>
  )
};

// Solo funciona en componentes de tipo NextPage
TimeLine.getInitialProps = () => {
  return { userName: '@ign' };
}

export default TimeLine;
