import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { config } from "../config/development";

class FirebaseService {
  constructor() {
    if (getApps().length == 0) {
      initializeApp(config.firebase);
    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        auth.signOut();
      }
    });
  }

  githubLogin() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(getAuth(), provider);
  }
}

export const firebaseService = new FirebaseService();
