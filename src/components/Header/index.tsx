import contentSection from '../../content';

const Header = () => {
  return (
    <header>
      <nav className="absolute w-full h-full bg-primary-400 border-solid border-with border-8 border-primary-50">
        <ul className="h-full p-2 flex-column">
          {Object.keys(contentSection).map((section, index) => (
            <li
              key={`menu-${section}-link`}
              className="text-5xl font-bold justify-center flex mb-4"
            >
              <a href={`#${section.toLocaleLowerCase()}`}>
                {contentSection[section].title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
