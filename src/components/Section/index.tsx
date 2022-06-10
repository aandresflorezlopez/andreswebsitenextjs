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
    <section id={id.toLocaleLowerCase()}>
      <h1>{t(title)}</h1>
      <h1>{t('hello')}</h1>
      <div>{description}</div>
    </section>
  );
};

export default Section;
