interface Props {
  title: string;
  description: string;
  body?: null | any;
  id: string;
}

const Section = ({ title, body, description, id }: Props) => {
  return (
    <section id={id.toLocaleLowerCase()}>
      <h1>{title}</h1>
      <div>{description}</div>
    </section>
  );
};

export default Section;
