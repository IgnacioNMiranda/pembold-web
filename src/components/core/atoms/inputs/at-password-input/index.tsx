import { ChangeEventHandler, useState } from 'react';
import styles from './styles.module.scss';
import { ShowPasswordIcon } from '../../../../utils/icons';

interface AtPasswordInputProps {
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className: string;
}

export const AtPasswordInput = ({ required, onChange, className }: AtPasswordInputProps) => {
  const [type, setType] = useState('password');

  const handleTypeChange = () => {
    setType(type === 'text' ? 'password' : 'text');
  };

  return (
    <div className={styles.passwordInputContainer}>
      <input
        className={` ${className} ${styles.passwordInput ?? ''}`}
        type={type}
        name="password"
        placeholder="Password"
        required={required}
        onChange={onChange}
        maxLength={30}
      />
      <span className={styles.showPasswordIcon}>
        <ShowPasswordIcon isPasswordHidden={type === 'password'} onClick={handleTypeChange} />
      </span>
    </div>
  );
};
