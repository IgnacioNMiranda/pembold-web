import { ChangeEventHandler } from 'react';
import styles from './styles.module.scss';

interface AtEmailInputProps {
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className: string;
}

export const AtEmailInput = ({ required, onChange, className }: AtEmailInputProps) => {
  return (
    <input
      className={`${className} ${styles.emailInput ?? ''}`}
      type="email"
      name="email"
      placeholder="Email"
      required={required}
      onChange={onChange}
      maxLength={30}
    />
  );
};
