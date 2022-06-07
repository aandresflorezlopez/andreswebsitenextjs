interface Props {
  title: string;
  body: string;
}

const Section = ({ title, body }: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{body}</div>
    </section>
  );
};

export default Section;
