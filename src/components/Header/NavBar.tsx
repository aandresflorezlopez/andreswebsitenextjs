import React, { useState } from 'react';
import contentSection from '../../content';
import Burger from './Burger';

const NavBar = () => {
  const [isMenuOpen, toogleMenu] = useState(false);

  const handleBurgerClick = () => {
    toogleMenu(!isMenuOpen);
  };

  if (!isMenuOpen) {
    return <Burger isOpen={isMenuOpen} onClick={handleBurgerClick} />;
  }

  return (
    <nav className="w-full h-full bg-primary-400 fixed">
      <Burger isOpen={isMenuOpen} onClick={handleBurgerClick} />
      <ul className="h-full p-2 flex-column">
        {Object.keys(contentSection).map((section, index) => (
          <li
            key={`menu-${section}-link`}
            className="text-5xl font-bold justify-center flex mb-4 font-special"
          >
            <a
              href={`#${section.toLocaleLowerCase()}`}
              onClick={handleBurgerClick}
            >
              {contentSection[section].title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
