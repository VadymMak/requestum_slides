import React from "react";

import Slide_1 from "../../../assets/Profile.jpg";
// import Slide_2 from "../../../assets/Mask_group.jpg";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";

const Design = () => {
  return (
    <div className="container design">
      <RoughEstimateLayout>
        <div className="design-table">Design</div>
        <div className="design-footer">
          <div className="design-footer__left">
            <img src={Slide_1} alt="slide_1" />
          </div>
          <div className="design-footer__right">
            {/* <img src={Slide_2} alt="slide_2" /> */}
          </div>
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default Design;
