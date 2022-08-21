import FeatureListIcon from "../assets/icon-components/FeatureListIcon";
import MindMapIcon from "../assets/icon-components/MindMapIcon";
import RoughEstimateIcon from "../assets/icon-components/RoughEstimateIcon";
import DesignesIcon from "../assets/icon-components/DesignesIcon";
import SpecificationIcon from "../assets/icon-components/SpecificationIcon";
import AccurateEstimateIcon from "../assets/icon-components/AccurateEstimateIcon";
import DevelopmentPlanIcon from "../assets/icon-components/DevelopmentPlanIcon";

export const presaleEstimateTitles = [
  { id: 1, component: <MindMapIcon />, title: "mind map" },
  { id: 2, component: <FeatureListIcon />, title: "feature list" },
  { id: 1, component: <RoughEstimateIcon />, title: "mind map" },
];

export const discoveryPhaseTitles = [
  { id: 1, component: <DesignesIcon />, title: "designs" },
  { id: 2, component: <SpecificationIcon />, title: "specification" },
];

export const accurateEstimateTitles = [
  { id: 1, component: <AccurateEstimateIcon />, title: "accurate estimate" },
  { id: 2, component: <DevelopmentPlanIcon />, title: "development plan" },
];

export const sideMenuTitles = [
  { id: 1, title: "pre-sale estimate" },
  { id: 2, title: "discovery phase" },
  { id: 3, title: "accurate estimate" },
];
