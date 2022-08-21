import { Routes, Route } from "react-router-dom";

import PresaleEstimate from "../pages/home/PresaleEstimate";
import Login from "../pages/presale/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PresaleEstimate />} />
      <Route path="/" element={<PresaleEstimate />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
