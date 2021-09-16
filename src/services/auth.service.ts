import { UserCredentialsDTO } from '../dto';
import { firebaseService } from './firebase.service';
import axios from 'axios';
import { config } from '../config/development';

class AuthService {
  async githubLogin() {
    try {
      const user = await firebaseService.githubLogin();
      return user;
    } catch (error) {
      //'auth/popup-closed-by-user'
    }
    return null;
  }

  async register(credentials: UserCredentialsDTO) {
    const uri = `${config.api.uri}/auth/register`;

    const {
      data: { token },
    } = await axios.post(uri, credentials);

    await firebaseService.signIn(token);
  }

  async login(credentials: UserCredentialsDTO) {
    const uri = `${config.api.uri}/auth/login`;

    const {
      data: { token },
    } = await axios.post(uri, credentials);

    await firebaseService.signIn(token);
  }
}

export const authService = new AuthService();
