import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import styles from '../styles/Home.module.css';
import { data } from '../data';

export default function Home({ services }) {
  console.log(services);
  return (
    <div className={styles.container}>
      <Head>
        <title>PANDA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
