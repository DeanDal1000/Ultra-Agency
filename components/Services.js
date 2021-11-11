import React from 'react';
import styles from '../styles/Services.module.css';
import Link from 'next/link';

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What can we offer?</h1>
      <h1 className={styles.subtitle}>Services we can offer</h1>
      <div className={styles.services}>
        {services &&
          services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`}>
              {service.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Services;
