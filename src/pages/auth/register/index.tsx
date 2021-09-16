import styles from './styles.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { GithubSvg, LogoSvg, LogoHeadSvg } from '../../../components/utils/svg';
import { GuestLayout } from '../../../components/core/layouts';
import { AtButton, AtLink } from '../../../components/core/atoms';
import { OrRegisterForm } from '../../../components/core/organisms';
import { RedirectionTypes, useNavigation } from 'hooks/useNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { handleGithubLogin } from '../handleGitHubLogin';

const RegisterPage: NextPage = () => {
  const { redirect } = useNavigation();
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title key="title">Penboldt - Register</title>
        <meta
          key="description"
          name="description"
          content="Register in Penboldt and share with the biggest dev community!"
        />
      </Head>

      <GuestLayout>
        <div className={styles.logoContainer}>
          <div className={styles.logoBg}></div>
          <LogoSvg className={styles.logo} height={320} width={320} />
          <LogoHeadSvg className={styles.logoHead} height={100} width={100} />
        </div>
        <div className={styles.registerContainer}>
          <h2 className={styles.title}>Sign up for free!</h2>
          <AtLink href={RedirectionTypes.LOGIN} label="Already have an account?" classes="alignEnd" />
          <QueryClientProvider client={queryClient}>
            <OrRegisterForm />
          </QueryClientProvider>
          <div className={styles.divider}>
            <hr />
            <span>Or sign up with</span>
            <hr />
          </div>
          <AtButton onClick={handleGithubLogin(redirect)}>
            <GithubSvg fill="#fff" />
            Github
          </AtButton>
        </div>
      </GuestLayout>
    </>
  );
};

export default RegisterPage;
