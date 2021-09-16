import { getClassesFromString } from '../../../utils/helpers';
import { Loading } from '../../../utils/icons';
import styles from './styles.module.scss';

const buttonTypes = {
  default: styles['btn-default'],
  form: styles['btn-form'],
};

export interface AtButtonProps {
  children: React.ReactNode;
  onClick?: () => unknown;
  classes?: string;
  type?: keyof typeof buttonTypes;
  isLoading?: boolean;
}

export const AtButton = ({ children, onClick, classes = '', type = 'default', isLoading }: AtButtonProps) => {
  if (isLoading) {
    classes += ' loading';
  }

  const extraClasses = getClassesFromString(classes, styles);

  const className = `${styles.btn} ${buttonTypes[type]} ${extraClasses}`;

  return (
    <button onClick={onClick} className={className ?? ''} disabled={isLoading}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};
