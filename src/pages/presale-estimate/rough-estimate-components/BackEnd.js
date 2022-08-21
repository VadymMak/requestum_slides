import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import SpreadSheet from "../../../assets/FrontEndSpredsheet.jpg";
import IosFooter from "../../../assets/IosFooter.jpg";

const BackEnd = () => {
  return (
    <div className="container backend">
      <RoughEstimateLayout>
        <div className="backend-table">
          <img src={SpreadSheet} alt="spreadsheet" />
        </div>
        <div className="backend-footer">
          <img src={IosFooter} alt="ios" />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default BackEnd;
