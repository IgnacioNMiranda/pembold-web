import { RedirectionTypes } from '../../../../hooks/useNavigation';
import { AtLink } from '../../atoms';
import styles from './styles.module.scss';

export const MlNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <AtLink type="navigation" href={RedirectionTypes.HOME} label="Inicio" />
        </li>
      </ul>
    </nav>
  );
};
