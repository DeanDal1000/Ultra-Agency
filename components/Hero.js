import React from 'react';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import Circle from './Circle';

const Hero = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#fff" top="-50vh" left="-50vh" />

      <div className={styles.card} backgroundColor="black">
        <h1 className={styles.title}>
          <span className={styles.brand}>PANDA </span>Digital marketing agency
        </h1>
        <p className={styles.desc}>
          We are PANDA. We combine the trusted expertise and objectivity of
          Ultra with today’s digital marketing capabilities, to help your
          businesses grow and suceed into sucess.
        </p>
        <button className={styles.button}>Discover</button>
      </div>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src="/img/hero3.jpg"
          layout="fill"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
