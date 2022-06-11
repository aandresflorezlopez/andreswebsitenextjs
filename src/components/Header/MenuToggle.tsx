import * as React from 'react';
import { motion } from 'framer-motion';

interface PathProps extends JSX.IntrinsicAttributes {
  d?: string;
  variants?: any;
  transition?: any;
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="5"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

const MenuToggle = ({ toggle }: MenuToggleProps) => (
  <button onClick={toggle} className="bg-primary-500 p-6 relative z-20">
    <svg width="50" height="50" viewBox="0 0 50 50">
      <Path
        variants={{
          closed: { d: 'M 0 2.5 L 50 2.5' },
          open: { d: 'M 0 50 L 50 2.5' },
        }}
      />
      <Path
        d="M 0 20 L 50 20"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 0 40 L 50 40' },
          open: { d: 'M 0 0 L 50 50' },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
