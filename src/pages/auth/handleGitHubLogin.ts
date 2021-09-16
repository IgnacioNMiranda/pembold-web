import { RedirectionTypes } from '../../hooks';
import { authService } from '../../services';
import { localStorageUtil } from '../../utils/localStorage.util';

export const handleGithubLogin = (redirect: (redirection: RedirectionTypes) => void) => async () => {
  const userCredentials = await authService.githubLogin();
  if (userCredentials) {
    localStorageUtil.setItem('user', userCredentials.user.email);
    redirect(RedirectionTypes.HOME);
  }
};
