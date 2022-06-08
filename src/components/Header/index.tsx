import contentSection from '../../content';

const Header = () => {
  return (
    <header>
      <ul>
        {Object.keys(contentSection).map((section, index) => (
          <li key={`menu-${section}-link`}>
            <a href={`#${section.toLocaleLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
