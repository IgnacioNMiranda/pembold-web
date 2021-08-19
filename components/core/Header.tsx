import styles from './Header.module.css';
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/"><a>Inicio</a></Link>
          </li>
          <li>
          <Link href="/timeline"><a>Timeline</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
