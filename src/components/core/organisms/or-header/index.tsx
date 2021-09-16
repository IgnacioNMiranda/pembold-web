import styles from './styles.module.scss';
import { MlNavbar } from '../../molecules/ml-navbar';
import { MlAuthOptions } from '../../molecules/ml-auth-options';

export const OrHeader = () => {
  return (
    <header className={styles.header}>
      <MlNavbar />
      <MlAuthOptions />
    </header>
  );
};
