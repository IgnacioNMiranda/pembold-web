import { firebaseService } from "./firebase.service";

class AuthService {
  async githubLogin() {
    const user = await firebaseService.githubLogin();
    console.log(user);
  }
}

export const authService = new AuthService();
