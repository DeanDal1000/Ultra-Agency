import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>PANDA CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span className={styles.linkText}> Work with us</span>
            <Image src="/img/hero3.jpg" width="40px" height="40px" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          1 Glasgow Street Glasgow <br /> Scotland
        </div>
        <div className={styles.cardItem}>
          Contact@glasgow
          <br /> 012345678912
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          © 2022 Panda Interactive
          <br /> All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
