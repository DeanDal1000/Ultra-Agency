import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Panda</Link>
      <ul className={styles.list}>
        <Link href="/products/design">
          <li className={styles.list_item}>Design</li>
        </Link>
        <Link href="/products/development">
          <li className={styles.list_item}>Development</li>
        </Link>
        <Link href="/products/production">
          <li className={styles.list_item}>Production</li>
        </Link>
        <Link href="/products/photography">
          <li className={styles.list_item}>Photography</li>
        </Link>
        <Link href="/contact">
          <li className={styles.list_item}>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
