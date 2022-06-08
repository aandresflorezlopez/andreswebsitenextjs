interface Props {
  title: string;
  description: string;
  body?: null | any;
}

const Section = ({ title, body, description }: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{description}</div>
    </section>
  );
};

export default Section;
