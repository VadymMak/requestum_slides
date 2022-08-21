import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import BA from "../../../assets/BusinessAnalyst.jpg";
import BAS from "../../../assets/BusinessAnalystSpreasheet.jpg";
import BAH from "../../../assets/BusinessAnalystHeader.jpg";

const BusinessAnalyst = () => {
  return (
    <div className="container business-analyst">
      <RoughEstimateLayout>
        <div className="business-analyst__header">
          <img src={BAH} alt="spreadsheet" />
        </div>
        <div className="business-analyst__table">
          <img src={BAS} alt="spreadsheet" />
        </div>
        <div className="business-analyst__footer">
          <img src={BA} alt="BA" />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default BusinessAnalyst;
