import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import Total from "../../../assets/Total.jpg";
import TotalsComponent from "../../../assets/components/TotalsComponent";

const Totals = () => {
  return (
    <div className="container total">
      <RoughEstimateLayout>
        <div className="total-table">
          <img src={Total} alt="spreadsheet" />
        </div>
        <div className="total-slide">
          <TotalsComponent width={"100%"} />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default Totals;
