import { Routes, Route, Navigate } from "react-router-dom";

import MindMap from "../pages/presale-estimate/MindMap";
import FeatureList from "../pages/presale-estimate/FeatureList";
// import RoughEstimate from "../pages/presale-estimate/RoughEstimate";
import Designs from "../pages/discovery-phase/Designs";
import Specification from "../pages/discovery-phase/Specification";
import AccurateEstimate from "../pages/accurate-estimate/AccurateEstimate";
import DevelopmentPlan from "../pages/accurate-estimate/DevelopmentPlan";
import Design from "../pages/presale-estimate/rough-estimate-components/Design";
import FrontEnd from "../pages/presale-estimate/rough-estimate-components/FrontEnd";
import Ios from "../pages/presale-estimate/rough-estimate-components/Ios";
import Android from "../pages/presale-estimate/rough-estimate-components/Android";
import BackEnd from "../pages/presale-estimate/rough-estimate-components/BackEnd";
import Qa from "../pages/presale-estimate/rough-estimate-components/Qa";
import Pm from "../pages/presale-estimate/rough-estimate-components/Pm";
import BusinessAnalyst from "../pages/presale-estimate/rough-estimate-components/BusinessAnalyst";
import DevOps from "../pages/presale-estimate/rough-estimate-components/DevOps";
import Totals from "../pages/presale-estimate/rough-estimate-components/Totals";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mind-map" replace />} />
      <Route
        path="/discovery-phase"
        element={<Navigate to="/designes" replace />}
      />
      <Route
        path="/accurate"
        element={<Navigate to="/accurate-estimate" replace />}
      />
      <Route path="/mind-map" element={<MindMap />} />
      <Route path="/feature-list" element={<FeatureList />} />
      <Route
        path="/rough-estimate"
        element={<Navigate to="/design" replace />}
      />
      <Route path="/designes" element={<Designs />} />
      <Route path="/specification" element={<Specification />} />
      <Route path="/accurate-estimate" element={<AccurateEstimate />} />
      <Route path="/development-plan" element={<DevelopmentPlan />} />
      <Route path="/design/*" element={<Design />} />
      <Route path="/rough-estimate/Design" element={<Design />} />
      <Route path="/rough-estimate/frontend/*" element={<FrontEnd />} />
      <Route path="/rough-estimate/ios/*" element={<Ios />} />
      <Route path="/rough-estimate/android/*" element={<Android />} />
      <Route path="/rough-estimate/backend/*" element={<BackEnd />} />
      <Route path="/rough-estimate/qa/*" element={<Qa />} />
      <Route path="/rough-estimate/pm/*" element={<Pm />} />
      <Route
        path="/rough-estimate/BusinessAnalyst"
        element={<BusinessAnalyst />}
      />
      <Route path="/rough-estimate/devops" element={<DevOps />} />
      <Route path="/rough-estimate/totals" element={<Totals />} />
    </Routes>
  );
};
