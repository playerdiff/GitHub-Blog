import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>GitHub Blog</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/issues" className={styles.navLink}>Issues</Link>
          </li>
          <li>
            <Link to="/profile" className={styles.navLink}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
