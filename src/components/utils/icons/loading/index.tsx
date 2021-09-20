import styles from './styles.module.scss';

export interface LoadingIconProps {
  size?: 'default' | 'big';
}

export const Loading = ({ size = 'default' }: LoadingIconProps) => {
  return <span className={`${styles.loadingIcon} ${styles[size]}`}></span>;
};
