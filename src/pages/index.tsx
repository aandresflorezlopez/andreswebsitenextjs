import type { NextPage } from 'next';
import React, { useRef } from 'react';
import Image from 'next/image';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import content from '../content';

/**
 *
 * animation libraries for
 * loader: https://react-move-docs.netlify.app/demos/animate
 * frame transition and menu: https://www.framer.com/motion/
 */

/**
 * TODO -- next steps
 * check another font for body content
 * create real content
 * create parallax
 * validate if framer or react-spring
 * select the right color band
 * select the right text color band
 * responsive
 * create section component
 * publish
 *
 * TODO: Mandatory changes
 * make menu animations
 * ! use SSR and SSG
 * ! mobile first
 * ? micro FE
 * ? design system
 * ? story book
 * ! API with laravel [ !!!!! ]
 * TODO: Remove library
 * ! remove i18n libraries
 *
 * TODO: technical stuffs
 * * unit testing
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

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: 'black' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: 'none', backgroundColor: 'yellow' }}
        >
          <Image
            alt="satellite4 "
            src={url('satellite4')}
            width={100}
            height={100}
            style={{ width: '15%', marginLeft: '70%', backgroundColor: 'red' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            backgroundColor: 'blue',
          }}
        >
          <Image
            width={400}
            height={400}
            alt="earth"
            src={url('earth')}
            style={{ width: '60%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
            backgroundColor: 'green',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            layout="fill"
            alt="name"
            src={url('bash')}
            style={{ width: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'greenyellow',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Image
            layout="fill"
            alt="name"
            width={300}
            height={200}
            src={url('clients-main')}
            style={{ width: '40%' }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
