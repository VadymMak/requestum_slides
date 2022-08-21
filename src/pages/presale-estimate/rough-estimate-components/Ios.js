import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import SpreadSheet from "../../../assets/FrontEndSpredsheet.jpg";
import IosFooter from "../../../assets/IosFooter.jpg";

const Ios = () => {
  return (
    <div className="container ios">
      <RoughEstimateLayout>
        <div className="ios-table">
          <img src={SpreadSheet} alt="spreadsheet" />
        </div>
        <div className="ios-footer">
          <img src={IosFooter} alt="ios" />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default Ios;
