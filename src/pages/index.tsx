import type { NextPage } from 'next';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import content from '../content';

/**
 * TODO: Mandatory changes
 * create sections
 * unit testing
 * define fonts
 * add fonts
 * make menu animations
 * ! use SSR and SSG
 * ! mobile first
 * ? micro FE
 * ? design system
 * ? story book
 * ! API with laravel
 * TODO: Remove library
 * ! remove i18n libraries
 */

/**
 * TODO: General enhacements
 * cursor = [squar]
 * cursor:hover = [click-area]
 * loader = my name with svg animation
 * global use alias instead relative paths
 * dark mode
 * CSS animations
 */

const Home: NextPage = () => {
  return (
    <div className="h-screen">
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

export async function getStaticProps({ locale }: { locale: any }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations('es', ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
