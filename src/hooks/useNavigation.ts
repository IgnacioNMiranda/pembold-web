import { useRouter } from 'next/router';

export enum RedirectionTypes {
  HOME = '/',
  REGISTER = '/auth/register',
  LOGIN = '/auth/login',
}

export const useNavigation = () => {
  const router = useRouter();

  const redirect = (redirection: RedirectionTypes) => {
    router.push(redirection);
  };

  return { redirect };
};
