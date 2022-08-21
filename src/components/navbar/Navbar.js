import React, { memo } from "react";
import { sideMenuTitles } from "../../constants/nav-titles";
import VerticalLine from "../../assets/components/VerticalLine";

import { Link } from "react-router-dom";
import { useNavbarContext } from "../../hooks/useNavbarContext";

const Navbar = () => {
  const [navId, setNavId] = useNavbarContext();

  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul className="navbar-nav__items">
          {sideMenuTitles &&
            sideMenuTitles.map((item) => {
              console.log("URL id: ", item.id);
              console.log("Nav id: ", navId);
              return (
                <li key={item.id} className="navbar-nav__item">
                  <div
                    className="navbar-nav__items-container"
                    onClick={() => setNavId(item.id)}
                  >
                    <Link to={item.url}>
                      <div
                        className={
                          navId === item.id
                            ? "navbar-nav__item-id active-id"
                            : "navbar-nav__item-id"
                        }
                      >
                        <span>{item.id}</span>
                      </div>
                      <span
                        className={
                          navId === item.id
                            ? "navbar-nav__item-title active-title"
                            : "navbar-nav__item-title"
                        }
                      >
                        {item.title}
                      </span>
                    </Link>
                    {item.id !== 3 && <VerticalLine id={item.id} />}
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
