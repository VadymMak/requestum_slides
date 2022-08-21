import React from "react";

import RoughEstimateLayout from "../../../components/layout/RoughEstimateLayout";
import LeftSlide from "../../../assets/Mask group_1_upd.jpg";
import RightSlide from "../../../assets/Mask group_2_upd.jpg";
import SpreadSheet from "../../../assets/DesignSpredsheet.jpg";
import FeatureListTwo from "../../../assets/components/FeatureListTwo";
import FeatureListOne from "../../../assets/components/FeatureListOne";

const Design = () => {
  return (
    <div className="container design">
      <RoughEstimateLayout>
        <div className="design-table">
          <img src={SpreadSheet} alt="spreadsheet" />
        </div>
        <div className="design-footer">
          <div className="design-footer__slide">
            <div className="design-footer__slide-one">
              <FeatureListOne />
            </div>
            <img src={LeftSlide} alt="design_slide" />
          </div>
          <div className="design-footer__slide">
            <div className="design-footer__slide-two">
              <FeatureListTwo />
            </div>
            <img src={RightSlide} alt="design_slide" />
          </div>
        </div>
      </RoughEstimateLayout>
    </div>
  );
};

export default Design;
