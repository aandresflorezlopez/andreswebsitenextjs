import type { NextPage } from 'next';
import React, { useRef } from 'react';
import Image from 'next/image';

import Terminal from '../components/Terminal';

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
 * study parallax
 * * * create skelletun for main content
 * * * create transitions between screens
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
    <Parallax
      ref={parallax}
      pages={1}
      style={{
        backgroundColor: 'black',
        top: '0',
        left: '0',
      }}
    >
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={2}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />
      <>
        <ParallaxLayer
          offset={0}
          speed={2}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Terminal />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={0.3}
          style={{ pointerEvents: 'none' }}
        >
          <Image
            alt="satellite4"
            src={url('satellite4')}
            width={50}
            height={50}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{
            pointerEvents: 'none',
          }}
        >
          <Image
            alt="satellite4"
            src={url('satellite4')}
            width={50}
            height={50}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          speed={0.3}
          style={{
            pointerEvents: 'none',
          }}
        >
          <Image
            alt="satellite3"
            src={url('satellite3')}
            width={50}
            height={50}
          />
        </ParallaxLayer>
      </>
    </Parallax>
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
