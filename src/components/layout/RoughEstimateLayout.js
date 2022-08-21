import React from "react";
import { RoughEstimateRouter } from "../../router/RoughEstimateRouter";

import RoughEstimateNavbar from "../navbar/RoughEstimateNavbar";

const RoughEstimateLayout = ({ children }) => {
  return (
    <>
      <RoughEstimateNavbar />
      {children}
      <RoughEstimateRouter />
    </>
  );
};

export default RoughEstimateLayout;
