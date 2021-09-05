import styles from './styles.module.scss';

const buttonTypes = {
  'default': styles['btn-default'],
  'form': styles['btn-form'],
  'big': styles['btn-big']
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => any;
  classes?: string;
  type: keyof typeof buttonTypes;
}

export const Button = ({children, onClick, classes = '', type = 'default'}: ButtonProps) => {
  const className = `${styles.btn} ${buttonTypes[type]} ${classes}`;

  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
};
