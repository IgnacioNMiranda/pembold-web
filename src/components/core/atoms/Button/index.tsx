import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => any,
  classes?: string;
}

export const Button = ({children, onClick, classes = ''}: ButtonProps) => {
  const className = `${styles.btn} ${classes}`;

  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
};
