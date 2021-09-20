import styles from './styles.module.scss';
import { MlNavbar, MlAuthOptions } from '../../molecules';
import { CloseMenuIcon, MenuIcon } from '../../../utils/icons';
import { useEffect, useState } from 'react';

export const OrHeader = () => {
  const [headerStyles, setHeaderStyles] = useState(styles.headerContainer);
  const [iconsBgStyle, setIconsBgStyle] = useState('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setHeaderStyles(isMenuOpen ? `${styles.headerContainer} ${styles.displayedMenu}` : styles.headerContainer);
    setIconsBgStyle(isMenuOpen ? styles.iconsBg : '');
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={headerStyles}>
        <div className={styles.menu}>
          <div className={styles.menuIcons}>
            <div className={iconsBgStyle} />
            <MenuIcon onClick={toggleMobileMenu} isOpen={isMenuOpen} />
            <CloseMenuIcon onClick={toggleMobileMenu} isOpen={isMenuOpen} />
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
