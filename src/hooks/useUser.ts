import { useEffect } from 'react';
import { useStateDispatch, useStateSelector } from '.';
import { firebaseService } from '../services';
import { fetchUser, clearUser } from '../store/user/userSlice';

export const useUser = () => {
  const { localUser, firebaseUser } = useStateSelector((state) => state.user);
  const dispatch = useStateDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    const isLoggedIn = async () => {
      if (!firebaseUser && localUser) {
        await firebaseService.signOut();
        dispatch(clearUser());
      }
    };
    isLoggedIn();
  }, []);

  return localUser;
};
