import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

interface MenuItemProps {
  i: number;
  children: React.ReactNode;
}

const MenuItem = ({ i, children }: MenuItemProps) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-5xl font-bold justify-center flex mb-8 font-special"
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
      {children}
    </motion.li>
  );
};

export default MenuItem;
