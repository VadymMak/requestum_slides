import { useReducer } from "react";
import { createContext } from "react";

import MindMapIcon from "../assets/icon-components/MindMapIcon";

const defaultProps = {
  url: null,
  fill: "#fff",
  stroke: "#fff",
};

const iconReducer = (state = defaultProps, action) => {
  switch (action.type) {
    case "/mind-map":
      return (
        <MindMapIcon
          props={{ stroke: action.payload.stroke, fill: action.payload.fill }}
        />
      );
    default:
      return state;
  }
};

export const IconContext = createContext(null);

export const IconContextProvider = ({ children }) => {
  return (
    <IconContext.Provider value={useReducer(iconReducer, {})}>
      {children}
    </IconContext.Provider>
  );
};
