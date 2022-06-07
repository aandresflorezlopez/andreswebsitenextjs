import type { NextPage } from 'next'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

import styles from '../styles/Home.module.css';

// TODO: use contet to build all sections
// TODO: use i18n
// TODO: support english and spanish (i18n)
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
}

export default Home;
