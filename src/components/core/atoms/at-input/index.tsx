import { ChangeEventHandler, useState } from 'react';
import { getClassesFromString } from '../../../utils/helpers';
import styles from './styles.module.scss';
import { ShowPasswordIcon } from '../../../utils/icons';

type InputTypes = 'text' | 'email' | 'password';

export interface AtInputProps {
  type: InputTypes;
  name: string;
  placeholder: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  classes?: string;
}

export const AtInput = ({ type, name, placeholder, required, onChange, classes }: AtInputProps) => {
  const [inputType, setInputType] = useState(type);
  const extraClasses = getClassesFromString(classes, styles);

  const handleInputTypeChange = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${extraClasses}`}
        type={inputType}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        maxLength={30}
      />
      {type === 'password' && (
        <span className={styles.showPasswordIcon}>
          <ShowPasswordIcon isPasswordHidden={inputType === 'password'} onClick={handleInputTypeChange} />
        </span>
      )}
    </div>
  );
};
