import { ChangeEventHandler } from 'react';
import styles from './styles.module.scss';

interface AtTextInputProps {
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  name?: string;
  className: string;
}

export const AtTextInput = ({
  required,
  onChange,
  placeholder = 'Text',
  name = 'text',
  className,
}: AtTextInputProps) => {
  return (
    <input
      className={`${className} ${styles.textInput ?? ''}`}
      type="text"
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      maxLength={30}
    />
  );
};
