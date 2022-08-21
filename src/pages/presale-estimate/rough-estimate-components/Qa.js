import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";

import QA from "../../../assets/QA.jpg";

const Qa = () => {
  return (
    <div className="container qa">
      <RoughEstimateLayout>
        <div className="qa-table">
          <img src={QA} alt="spreadsheet" />
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default Qa;
