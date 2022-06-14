import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { ParallaxLayer } from '@react-spring/parallax';

interface Props {
  title: string;
  description: string;
  body?: null | any;
  id: string;
  color: string;
  textColor: string;
  index: number;
}

const Section = ({
  title,
  description,
  id,
  color,
  textColor,
  index,
}: Props) => {
  const { t } = useTranslation();

  const classes = clsx(`${color} w-screen h-full p-16`);
  return (
    <ParallaxLayer
      offset={index}
      speed={2}
      style={{ backgroundColor: '#ff6d6d' }}
      className={`${color} p-20`}
    >
      <p
        className={`text-8xl mb-4 font-special justify-center items-center ${textColor}`}
      >
        {t(title)}
      </p>
    </ParallaxLayer>
  );
};

export default Section;
