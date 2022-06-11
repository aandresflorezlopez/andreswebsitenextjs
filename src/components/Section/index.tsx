import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  description: string;
  body?: null | any;
  id: string;
  color: string;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Section = ({ title, body, description, id, color }: Props) => {
  const { t } = useTranslation();
  const classes = clsx(`${color} w-screen h-full p-10`);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 2 }}
      id={id.toLocaleLowerCase()}
      className={classes}
    >
      <h1 className="text-8xl mb-4 font-special">{t(title)}</h1>
      <div>{description}</div>
    </motion.section>
  );
};

export default Section;
