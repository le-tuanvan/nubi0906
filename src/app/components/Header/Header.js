import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
      </div>

      {/* Menu */}
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Search + Cart */}
      <div className={styles.actions}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.search}
        />

        <span className={styles.icon}>🛒</span>
      </div>
    </header>
  );
}