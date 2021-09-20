import styles from './styles.module.scss';
import { MlNavbar, MlAuthOptions } from '../../molecules';
import { MenuIcon } from '../../../utils/icons';
import { useEffect, useState } from 'react';

export const OrHeader = () => {
  const [headerStyles, setHeaderStyles] = useState(styles.headerContainer);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setHeaderStyles(isMenuOpen ? `${styles.headerContainer} ${styles.displayedMenu}` : styles.headerContainer);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={headerStyles}>
        <div className={styles.menu}>
          <div className={styles.menuIcons}>
            <MenuIcon onClick={toggleMobileMenu} isOpen={isMenuOpen} />
          </div>
          <div className={styles.menuItems}>
            <MlNavbar />
          </div>
        </div>

        <MlAuthOptions />
      </div>
    </header>
  );
};
