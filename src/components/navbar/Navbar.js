import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__nav-items">
          <li className="navbar__nav-item">
            <Link to="/">pre-sale estimate</Link>
          </li>
          <li className="navbar__nav-item">
            <Link to="/discovery">discovery phase</Link>
          </li>
          <li className="navbar__nav-item">
            <Link to="/accurate">accurate estimate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
