import { AxiosError } from 'axios';
import { FormEvent, ReactElement } from 'react';
import { UseMutationResult } from 'react-query';
import { getClassesFromString } from '../../../utils/helpers';
import { getErrorMessage } from '../../../utils/helpers/getErrorMessage';
import { AtButton, AtButtonProps } from '../../atoms';
import styles from './styles.module.scss';

export interface OrFormProps {
  mutation: UseMutationResult<void, unknown, FormEvent<HTMLFormElement>, unknown>;
  classes?: string;
  children: ReactElement<HTMLInputElement>[];
  button: AtButtonProps;
}

export const OrForm = ({ mutation, classes, children, button }: OrFormProps) => {
  const extraClasses = getClassesFromString(classes, styles);

  const errorMessage = () => {
    setTimeout(() => {
      mutation.reset();
    }, 3000);
    return <span className={styles.error}>{getErrorMessage(mutation.error as AxiosError)}</span>;
  };

  return (
    <div className={`${styles.formContainer} ${extraClasses}`}>
      {mutation.isError && errorMessage()}
      <form onSubmit={mutation.mutate} className={styles.form}>
        {children}
        <AtButton {...button} isLoading={mutation.isLoading} />
      </form>
    </div>
  );
};
