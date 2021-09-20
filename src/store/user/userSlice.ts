import { createSlice } from '@reduxjs/toolkit';
import { firebaseService } from '../../services';
import { localStorageUtil } from '../../utils';

interface UserState {
  localUser: string | unknown;
  firebaseUser: boolean;
}

const INITIAL_STATE: UserState = {
  firebaseUser: false,
  localUser: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    fetchUser: () => ({
      firebaseUser: !!firebaseService.getCurrent(),
      localUser: localStorageUtil.getItem('user'),
    }),
    clearUser: () => ({
      firebaseUser: false,
      localUser: null,
    }),
  },
});

export const { fetchUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
