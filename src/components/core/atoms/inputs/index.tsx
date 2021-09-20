import React, { ChangeEventHandler } from 'react';
import { getClassesFromString } from '../../../utils/helpers';
import styles from './styles.module.scss';
import { AtEmailInput } from './at-email-input';
import { AtPasswordInput } from './at-password-input';
import { AtTextInput } from './at-text-input';

type InputTypes = 'text' | 'email' | 'password';

export interface AtInputProps {
  type: InputTypes;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  name?: string;
}

export const AtInput = ({ type, required, onChange, className, placeholder, name }: AtInputProps) => {
  const inputDefaultClasses = `${styles.input} ${getClassesFromString(className, styles)}`;

  switch (type) {
    case 'text':
      return (
        <AtTextInput
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className={inputDefaultClasses}
        />
      );
    case 'email':
      return <AtEmailInput required={required} onChange={onChange} className={inputDefaultClasses} />;
    case 'password':
      return <AtPasswordInput required onChange={onChange} className={inputDefaultClasses} />;
    default:
      return null;
  }
};
