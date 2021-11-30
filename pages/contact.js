import React from 'react';
import styles from '../styles/Contact.module.css';

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputS} placeholder="Name" />
        <input className={styles.inputS} placeholder="Phone" />
        <input className={styles.inputL} placeholder="Email" />
        <input className={styles.inputL} placeholder="Subject" />
        <textarea className={styles.text} placeholder="Message" rows={6} />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};
export default contact;
