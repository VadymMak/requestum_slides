import React from "react";
import { Link } from "react-router-dom";
import FeatureListIcon from "../../assets/icon-components/FeatureListIcon";
import MindMapIcon from "../../assets/icon-components/MindMapIcon";
import RoughEstimateIcon from "../../assets/icon-components/RoughEstimateIcon";
import DesignesIcon from "../../assets/icon-components/DesignesIcon";
import SpecificationIcon from "../../assets/icon-components/SpecificationIcon";
import AccurateEstimateIcon from "../../assets/icon-components/AccurateEstimateIcon";
import DevelopmentPlanIcon from "../../assets/icon-components/DevelopmentPlanIcon";

const TopBar = () => {
  return (
    <header className="top-navbar">
      <div className="top-nav__title">
        <span>1. Presale Estimate</span>
      </div>
      <nav className="top-navbar__nav">
        <ul className="top-navbar__nav-items">
          <li className="top-navbar__nav-item">
            <Link to="/">
              <DevelopmentPlanIcon />
              Top Home
            </Link>
          </li>
          <li className="top-navbar__nav-item">
            <Link to="/login">Top Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
