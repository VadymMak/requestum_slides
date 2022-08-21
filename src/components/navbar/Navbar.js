import React, { useEffect, memo } from "react";
import { sideMenuTitles } from "../../constants/nav-titles";
import VerticalLine from "../../assets/components/VerticalLine";

import { Link } from "react-router-dom";
import { useNavbarContext } from "../../hooks/useNavbarContext";

const Navbar = () => {
  const [, setNavId] = useNavbarContext();

  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul className="navbar-nav__items">
          {sideMenuTitles &&
            sideMenuTitles.map((item) => {
              return (
                <li key={item.id} className="navbar-nav__item">
                  <div
                    className="navbar-nav__items-container"
                    onClick={() => setNavId(item.id)}
                  >
                    <Link to={item.url}>
                      <div className="navbar-nav__item-id">
                        <span>{item.id}</span>
                      </div>
                      <span className="navbar-nav__item-title">
                        {item.title}
                      </span>
                    </Link>
                    {item.id !== 3 && <VerticalLine />}
                  </div>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default memo(Navbar);
