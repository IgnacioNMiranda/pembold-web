import type { NextPage } from "next";
import Head from "next/head";
import { GithubSvg, LogoSvg } from "../components/utils/svg";
import { AppLayout } from "../components/core/layouts";
import { Button } from "../components/core/atoms";
import styles from '@styles/pages/home.module.scss';
import { authService } from "../services";

const Home: NextPage = () => {
  const handleGithubLogin = () => {
    authService.githubLogin();
  };

  return (
    <>
      <Head>
        <title>Penboldt</title>
        <meta name="description" content="Twitter clone built with Next.js" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>Penboldt<LogoSvg height={96} width={96}/></h1>
        <p className={styles.slogan}>Easily share dev experiences with yours 👨‍💻👩‍💻</p>
        <Button onClick={handleGithubLogin}><GithubSvg fill='#fff'/>Github</Button>
      </AppLayout>
    </>
  );
};

export default Home;
