import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  description: string;
  body?: null | any;
  id: string;
}

const Section = ({ title, body, description, id }: Props) => {
  const { t } = useTranslation();
  return (
    <section
      id={id.toLocaleLowerCase()}
      className="bg-primary-300 w-screen h-full p-10"
    >
      <h1 className="text-8xl mb-4 font-special">{t(title)}</h1>
      <div>{description}</div>
    </section>
  );
};

export default Section;
