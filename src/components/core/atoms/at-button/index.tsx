import { getClassesFromString } from '../../../utils/helpers';
import { Loading } from '../../../utils/icons';
import { Colors } from '../../../utils/colors';
import styles from './styles.module.scss';

const buttonTypes = {
  thirdParty: styles['btn-third-party'],
  form: styles['btn-form'],
};

export interface AtButtonProps {
  children: React.ReactNode;
  onClick?: () => unknown;
  classes?: string;
  type?: keyof typeof buttonTypes;
  color?: Colors;
  isLoading?: boolean;
}

export const AtButton = ({
  children,
  onClick,
  classes = '',
  type,
  color = 'primary-light',
  isLoading,
}: AtButtonProps) => {
  if (isLoading) {
    classes += ' loading';
    color = 'gray';
  }

  const extraClasses = getClassesFromString(classes, styles);

  const className = `${styles.btn} ${type ? buttonTypes[type] : ''} ${styles[color]} ${extraClasses}`;

  return (
    <button onClick={onClick} className={className ?? ''} disabled={isLoading}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};
