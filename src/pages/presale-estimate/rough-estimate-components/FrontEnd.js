import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import SpreadSheet from "../../../assets/FrontEndSpredsheet.jpg";
import FrontendFooter from "../../../assets/FrontendFooter.jpg";

const FrontEnd = () => {
  return (
    <div className="container frontend">
      <RoughEstimateLayout>
        <div className="frontend-table">
          <img src={SpreadSheet} alt="spreadsheet" />
        </div>
        <div className="frontend-footer">
          <img src={FrontendFooter} alt="frontend" />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default FrontEnd;
