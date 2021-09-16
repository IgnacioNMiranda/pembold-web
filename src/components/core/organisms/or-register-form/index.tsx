import { FormEvent, useState } from 'react';
import { AtInput } from '../../atoms';
import { OrForm } from '../or-form';
import { CreateUserDTO } from '../../../../dto';
import { handleInput } from '../../../utils/helpers';
import { authService } from '../../../../services';
import { RedirectionTypes, useNavigation } from '../../../../hooks/useNavigation';
import { useMutation } from 'react-query';
import { localStorageUtil } from '../../../../utils/localStorage.util';

const INITIAL_CREDENTIAL_STATE: CreateUserDTO = {
  email: '',
  password: '',
};

export const OrRegisterForm = () => {
  const { redirect } = useNavigation();
  const [credentials, setCredentials] = useState(INITIAL_CREDENTIAL_STATE);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authService.register(credentials);

    if (localStorageUtil.getItem('user')) {
      redirect(RedirectionTypes.HOME);
    }
  };
  const mutation = useMutation(handleRegister);

  return (
    <OrForm mutation={mutation} button={{ type: 'form', children: 'Sign up' }}>
      <AtInput
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleInput(credentials, setCredentials)}
      />
      <AtInput
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleInput(credentials, setCredentials)}
      />
    </OrForm>
  );
};
