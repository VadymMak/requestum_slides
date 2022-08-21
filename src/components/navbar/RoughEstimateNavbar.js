import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { roughEstimateMenuTilte } from "../../constants/nav-titles";

const RoughEstimateNavbar = () => {
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive(window.location.pathname.split("/")[2]);
  }, [isActive]);

  console.log("ID: ", isActive);

  return (
    <header className="container rough-header">
      <nav className="rough-header__nav">
        <ul className="rough-header__items">
          {roughEstimateMenuTilte &&
            roughEstimateMenuTilte.map((element) => {
              return (
                <li
                  className={isActive === element.title ? "active" : null}
                  key={element.id}
                >
                  <Link
                    className={isActive === element.title ? "active" : null}
                    to={element.url}
                  >
                    {element.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default RoughEstimateNavbar;
