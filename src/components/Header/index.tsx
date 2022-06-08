import contentSection from '../../content';

const Header = () => {
  return (
    <header>
      <ul>
        {Object.keys(contentSection).map((section, index) => (
          <li
            key={`menu-${section}-link`}
            className="text-3xl font-bold underline"
          >
            <a href={`#${section.toLocaleLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
