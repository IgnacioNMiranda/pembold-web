import { RedirectionTypes, useNavigation, useUser, useStateDispatch } from '../../../../hooks';
import { firebaseService } from '../../../../services';
import { clearUser } from '../../../../store/user/userSlice';
import { Loading } from '../../../utils/icons';
import { AtButton, AtLink } from '../../atoms';
import styles from './styles.module.scss';

export const MlAuthOptions = () => {
  const user = useUser();
  const dispatch = useStateDispatch();
  const { redirect } = useNavigation();

  const handleLogout = async () => {
    await firebaseService.signOut();
    dispatch(clearUser());
    redirect(RedirectionTypes.HOME);
  };

  return (
    <div className={styles['auth-options']}>
      {user === undefined && <Loading />}
      {user === null && (
        <>
          <AtLink href={RedirectionTypes.LOGIN} label="Login" color="tertiary" className="button scale" />
          <AtLink href={RedirectionTypes.REGISTER} label="Sign up" color="tertiary" className="button scale" />
        </>
      )}
      {user && (
        <AtButton color="tertiary" onClick={handleLogout}>
          Logout
        </AtButton>
      )}
    </div>
  );
};
