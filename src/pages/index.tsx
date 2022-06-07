import type { NextPage } from 'next';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

import styles from '../styles/Home.module.css';

/**
 * TODOs:
 * use content to build all sections
 * use i18n
 * support english and spanish (i18n)
 * make menu
 * create sections
 * unit testing
 * ! use SSR and SSG
 * ! mobile first
 * ? micro FE
 * ? design system
 * ? story book
 * ! API with laravel
 *
 */

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Section title={'about me'} body={'default'} />
      <Section title={'engineering experience'} body={'default'} />
      <Section title={'other passions'} body={'default'} />
      <Section title={'contact me'} body={'default'} />
      <Footer />
    </div>
  );
};

export default Home;
