import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { useNavbarContext } from "../../hooks/useNavbarContext";
import { useIconContext } from "../../hooks/useIconContext";
import {
  sideMenuTitles,
  presaleEstimateTitles,
  discoveryPhaseTitles,
  accurateEstimateTitles,
} from "../../constants/nav-titles";

const TopBar = () => {
  const [navId] = useNavbarContext();
  const [topBarTiltes, setTopBarTitles] = useState([]);
  const [isActive, setIsActive] = useState("mind-");

  const handleMenuClick = useCallback((event) => {
    setIsActive(event.split("/")[1]);
  }, []);

  useEffect(() => {
    switch (navId) {
      case 1:
        setTopBarTitles(presaleEstimateTitles);
        setIsActive("mind-map");
        break;
      case 2:
        setTopBarTitles(discoveryPhaseTitles);
        setIsActive("designes");
        break;
      case 3:
        setTopBarTitles(accurateEstimateTitles);
        setIsActive("accurate-estimate");
        break;
      default:
        console.log("Something wrong");
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
            topBarTiltes.map((item) => {
              return (
                <li className="top-navbar__nav-item" key={item.id}>
                  <Link
                    to={item.url}
                    onClick={() => {
                      return handleMenuClick(item.url);
                    }}
                  >
                    <div
                      className={
                        isActive === item.url.split("/")[1] ? "active" : null
                      }
                    >
                      {item.component}
                      <span>{item.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
