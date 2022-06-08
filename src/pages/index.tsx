import type { NextPage } from 'next';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

import styles from '../styles/Home.module.css';

import content from '../content';

/**
 * TODO: Mandatory changes
 * use content to build all sections
 * use i18n
 * support english and spanish (i18n)
 * make menu
 * create sections
 * unit testing
 * define fonts
 * add fonts
 * define a colors scale
 * ! use SSR and SSG
 * ! mobile first
 * ? micro FE
 * ? design system
 * ? story book
 * ! API with laravel
 *
 */

/**
 * TODO: General enhacements
 * cursor = [squar]
 * cursor:hover = [click-area]
 * loader = my name with svg animation
 * global use alias instead relative paths
 * dark mode
 */

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      {Object.keys(content).map((sectionKey: string, index: number) => (
        <Section
          key={`section${sectionKey}-${index}`}
          id={sectionKey}
          title={content[sectionKey].title}
          description={content[sectionKey].description}
          body={content[sectionKey].data}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
