import Link from "next/link";
import styles from './styles.module.scss';

export const OrHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/"><a>Inicio</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
