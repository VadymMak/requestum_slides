import { Routes, Route, Navigate } from "react-router-dom";

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

export const RoughEstimateRouter = () => {
  return (
    <Routes>
      {/* <Route path="/rough-estimate/design" element={<Design />} />
      <Route
        path="/rough-estimate"
        element={<Navigate to="/rough-estimate/design" replace />}
      />
      <Route path="/rough-estimate/frontend" element={<FrontEnd />} />
      <Route path="/rough-estimate/ios" element={<Ios />} />
      <Route path="/rough-estimate/android" element={<Android />} />
      <Route path="/rough-estimate/backend" element={<BackEnd />} />
      <Route path="/rough-estimate/qa" element={<Qa />} />
      <Route path="/rough-estimate/pm" element={<Pm />} />
      <Route
        path="/rough-estimate/business-analyst"
        element={<BusinessAnalyst />}
      />
      <Route path="/rough-estimate/devops" element={<DevOps />} />
      <Route path="/rough-estimate/totals" element={<Totals />} /> */}
    </Routes>
  );
};
