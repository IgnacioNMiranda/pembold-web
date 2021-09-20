import { FormEvent, useState } from 'react';
import { AtInput } from '../../atoms';
import { OrForm } from '../or-form';
import { UserCredentialsDTO } from '../../../../dto';
import { handleInput } from '../../../utils/helpers';
import { authService } from '../../../../services';
import { RedirectionTypes, useNavigation } from '../../../../hooks';
import { useMutation } from 'react-query';
import { localStorageUtil } from '../../../../utils';

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
      <AtInput type="email" required onChange={handleInput(credentials, setCredentials)} />
      <AtInput type="password" required onChange={handleInput(credentials, setCredentials)} />
    </OrForm>
  );
};
