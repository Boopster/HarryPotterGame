import React from 'react';
import './NavBar.css';

const NavBar = ({changePage}) => {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <li>Characters</li>
          <li>Sorting Hat</li>
          <li>Spell Book</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
