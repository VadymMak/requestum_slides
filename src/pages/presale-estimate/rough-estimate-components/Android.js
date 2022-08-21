import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import SpreadSheet from "../../../assets/FrontEndSpredsheet.jpg";
import AndroidFooter from "../../../assets/AndroidFooter.jpg";

const Android = () => {
  return (
    <div className="container android">
      <RoughEstimateLayout>
        <div className="android-table">
          <img src={SpreadSheet} alt="spreadsheet" />
        </div>
        <div className="android-footer">
          <img src={AndroidFooter} alt="ios" />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default Android;
