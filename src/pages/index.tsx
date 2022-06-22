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
          <div className="absolute left-5 bottom-4 animate-bounce-slow">
            <Image alt="img" src={url('satellite2')} width={70} height={70} />
          </div>
          <div className="absolute right-5 top-4 animate-bounce-slow">
            <Image alt="img" src={url('satellite4')} width={70} height={70} />
          </div>
          <div className="absolute right-5 top-4 animate-bounce-slow opacity-20 -z-10">
            <Image alt="img" src={url('cloud')} width={170} height={170} />
          </div>
          <div className="absolute left-5 bottom-10 animate-bounce-slow opacity-20 -z-10">
            <Image alt="img" src={url('cloud')} width={170} height={170} />
          </div>
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
