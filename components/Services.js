import React from 'react';
import styles from '../styles/Services.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What can we offer?</h1>
      <h1 className={styles.subtitle}>Services we can offer</h1>
      <div className={styles.services}>
        {services &&
          services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`}>
              <div className={styles.service}>
                <div className={styles.desc}>{service.desc}</div>
                <span className={styles.category}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                      muted
                      className={styles.video}
                    />
                  ) : (
                    <Image
                      src={`/img/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Services;
