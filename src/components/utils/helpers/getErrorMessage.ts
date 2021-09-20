import { FirebaseError } from '@firebase/util';
import { AxiosError } from 'axios';

const FirebaseErrors = {
  'auth/invalid-custom-token': 'Something went wrong during logging in, please try again.',
};

export const getErrorMessage = (error: Error) => {
  if ('request' in error) {
    // is an AxiosError
    const axiosError = error as AxiosError;

    return axiosError.response ? axiosError.response.data.message : 'We are under maintenance, please try again later.';
  } else if ('code' in error && 'customData' in error) {
    // is a FirebaseError
    const code = (error as FirebaseError).code as keyof typeof FirebaseErrors;
    return FirebaseErrors[code];
  }
};
