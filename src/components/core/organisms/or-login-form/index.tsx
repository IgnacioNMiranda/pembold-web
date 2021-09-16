import { FormEvent, useState } from 'react';
import { AtInput } from '../../atoms';
import { OrForm } from '../or-form';
import { UserCredentialsDTO } from '../../../../dto';
import { handleInput } from '../../../utils/helpers';
import { authService } from '../../../../services';
import { RedirectionTypes, useNavigation } from '../../../../hooks/useNavigation';
import { useMutation } from 'react-query';
import { localStorageUtil } from '../../../../utils/localStorage.util';

const INITIAL_CREDENTIAL_STATE: UserCredentialsDTO = {
  email: '',
  password: '',
};

export const OrLoginForm = () => {
  const { redirect } = useNavigation();
  const [credentials, setCredentials] = useState(INITIAL_CREDENTIAL_STATE);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authService.login(credentials);

    if (localStorageUtil.getItem('user')) {
      redirect(RedirectionTypes.HOME);
    }
  };
  const mutation = useMutation(handleLogin);

  return (
    <OrForm mutation={mutation} button={{ type: 'form', children: 'Sign in' }}>
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
