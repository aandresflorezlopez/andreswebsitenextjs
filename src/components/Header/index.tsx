import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
      custom={{ width: 0, height: 0 }}
      className="fixed top-0 right-0 z-20"
    >
      <motion.div className="background" variants={sidebar} />
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Header;
