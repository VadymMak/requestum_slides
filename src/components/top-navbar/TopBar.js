import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavbarContext } from "../../hooks/useNavbarContext";
import {
  sideMenuTitles,
  presaleEstimateTitles,
  discoveryPhaseTitles,
  accurateEstimateTitles,
} from "../../constants/nav-titles";

const TopBar = () => {
  const [navId] = useNavbarContext();
  const [topBarTiltes, setTopBarTitles] = useState([]);

  console.log("Top bar titles: ", sideMenuTitles);

  useEffect(() => {
    switch (navId) {
      case 2:
        return setTopBarTitles(discoveryPhaseTitles);
      case 3:
        return setTopBarTitles(accurateEstimateTitles);
      default:
        return setTopBarTitles(presaleEstimateTitles);
    }
  }, [navId]);

  return (
    <header className="top-navbar">
      <div className="top-navbar__title">
        {sideMenuTitles.map(
          (item) =>
            item.id === navId && (
              <span key={item.id}>
                {item.id}. {item.title}
              </span>
            )
        )}
      </div>
      <nav className="top-navbar__nav">
        <ul className="top-navbar__nav-items">
          {topBarTiltes &&
            topBarTiltes.map((item) => (
              <li className="top-navbar__nav-item" key={item.id}>
                <Link to="/login">
                  <div>
                    {item.component}
                    <span>{item.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          {/* <li className="top-navbar__nav-item">
            <Link to="/">Top Home</Link>
          </li>
          <li className="top-navbar__nav-item">
            <Link to="/login">Top Login</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
