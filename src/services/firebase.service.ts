import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signInWithCustomToken } from 'firebase/auth';
import { config } from '../config/development';
import { localStorageUtil } from '../utils';

class FirebaseService {
  constructor() {
    if (getApps().length == 0) {
      initializeApp(config.firebase);
    }
  }

  getCurrent() {
    return getAuth().currentUser;
  }

  registerEvents() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.signOut();
      }
    });
  }

  githubLogin() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(getAuth(), provider);
  }

  async signIn(token: string) {
    const auth = getAuth();

    const { user } = await signInWithCustomToken(auth, token);

    if (user?.email) {
      localStorageUtil.setItem('user', user.email);
    }
    this.registerEvents();
  }

  async signOut(): Promise<void> {
    await getAuth().signOut();
    localStorageUtil.clear();
  }
}

export const firebaseService = new FirebaseService();
