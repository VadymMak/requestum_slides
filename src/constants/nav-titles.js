import FeatureListIcon from "../assets/icon-components/FeatureListIcon";
import MindMapIcon from "../assets/icon-components/MindMapIcon";
import RoughEstimateIcon from "../assets/icon-components/RoughEstimateIcon";
import DesignesIcon from "../assets/icon-components/DesignesIcon";
import SpecificationIcon from "../assets/icon-components/SpecificationIcon";
import AccurateEstimateIcon from "../assets/icon-components/AccurateEstimateIcon";
import DevelopmentPlanIcon from "../assets/icon-components/DevelopmentPlanIcon";
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

export const presaleEstimateTitles = [
  {
    id: 1,
    component: <MindMapIcon />,
    title: "mind map",
    url: "/mind-map",
  },
  {
    id: 2,
    component: <FeatureListIcon />,
    title: "feature list",
    url: "/feature-list",
  },
  {
    id: 3,
    component: <RoughEstimateIcon />,
    title: "rough estimate",
    url: "/design",
  },
];

export const discoveryPhaseTitles = [
  { id: 1, component: <DesignesIcon />, title: "designs", url: "/designes" },
  {
    id: 2,
    component: <SpecificationIcon />,
    title: "specification",
    url: "/specification",
  },
];

export const accurateEstimateTitles = [
  {
    id: 1,
    component: <AccurateEstimateIcon />,
    title: "accurate estimate",
    url: "/accurate-estimate",
  },
  {
    id: 2,
    component: <DevelopmentPlanIcon />,
    title: "development plan",
    url: "/development-plan",
  },
];

export const sideMenuTitles = [
  { id: 1, title: "pre-sale estimate", url: "/" },
  { id: 2, title: "discovery phase", url: "/discovery-phase" },
  { id: 3, title: "accurate estimate", url: "/accurate" },
];

export const featureTableHeader = [
  { id: 1, title: "Functionality" },
  { id: 2, title: "Description" },
  { id: 3, title: "Comments/Assumptions" },
];

export const roughEstimateMenuTilte = [
  {
    is: 1,
    title: "Design",
    component: <Design />,
    url: "/rough-estimate/Design",
  },
  {
    is: 2,
    title: "FrontEnd",
    component: <FrontEnd />,
    url: "/rough-estimate/FrontEnd",
  },
  {
    is: 3,
    title: "iOs",
    component: <Ios />,
    url: "/rough-estimate/iOs",
  },
  {
    is: 4,
    title: "Android",
    component: <Android />,
    url: "/rough-estimate/Android",
  },
  {
    is: 5,
    title: "BackEnd",
    component: <BackEnd />,
    url: "/rough-estimate/BackEnd",
  },
  {
    is: 6,
    title: "QA",
    component: <Qa />,
    url: "/rough-estimate/QA",
  },
  {
    is: 7,
    title: "PM",
    component: <Pm />,
    url: "/rough-estimate/PM",
  },
  {
    is: 8,
    title: "BusinessAnalyst",
    component: <BusinessAnalyst />,
    url: "/rough-estimate/BusinessAnalyst",
  },
  {
    is: 9,
    title: "DevOps",
    component: <DevOps />,
    url: "/rough-estimate/DevOps",
  },
  {
    is: 10,
    title: "Totals",
    component: <Totals />,
    url: "/rough-estimate/Totals",
  },
];
