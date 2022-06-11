import React, { useState } from 'react';
import { motion } from 'framer-motion';

import MenuItem from './MenuItem';

import contentSection from '../../content';

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const NavBar = () => {
  return (
    <motion.ul
      variants={variants}
      className="h-full w-full z-10 p-2 flex-column fixed top-0 left-0 bg-primary-100 flex justify-center items-center flex-col"
    >
      {Object.keys(contentSection).map((section, index) => (
        <MenuItem i={index} key={index}>
          <a href={`#${section.toLocaleLowerCase()}`}>
            {contentSection[section].title}
          </a>
        </MenuItem>
      ))}
    </motion.ul>
  );
};

export default NavBar;
