import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AtLink, AtButton } from '../../../components/core/atoms';
import { TmGuest } from '../../../components/core/templates';
import { OrLoginForm } from '../../../components/core/organisms';
import { LogoHeadIcon, GithubIcon } from '../../../components/utils/icons';
import { RedirectionTypes, useNavigation } from '../../../hooks';
import { handleGithubLogin } from '../../../utils';
import styles from './styles.module.scss';

const LoginPage: NextPage = () => {
  const { redirect } = useNavigation();
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title key="title">Penboldt - Login</title>
        <meta
          key="description"
          name="description"
          content="Log in and get updated of the recent Penboldt news regarding to your preferences!"
        />
      </Head>

      <TmGuest>
        <div className={styles.loginContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logoBg}></div>
            <LogoHeadIcon className={styles.logoHead} height={100} width={100} />
          </div>

          <div className={styles.loginForm}>
            <h2 className={styles.title}>Log in</h2>
            <AtLink href={RedirectionTypes.REGISTER} label="Don't have an account?" className="alignEnd" />
            <QueryClientProvider client={queryClient}>
              <OrLoginForm />
            </QueryClientProvider>
          </div>

          <div className={styles.thirdPartyLogin}>
            <div className={styles.divider}>
              <hr />
              <span>Or log in with</span>
              <hr />
            </div>
            <AtButton type="thirdParty" color="primary-light" onClick={handleGithubLogin(redirect)}>
              <GithubIcon fill="#fff" />
              Github
            </AtButton>
          </div>
        </div>
      </TmGuest>
    </>
  );
};

export default LoginPage;
