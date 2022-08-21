import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./styles/main.scss";

import { BrowserRouter } from "react-router-dom";
import { NavbarContextProvider } from "./context/NavbarContext";
import { IconContextProvider } from "./context/IconContext";

ReactDOM.render(
  <React.StrictMode>
    <NavbarContextProvider>
      <IconContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IconContextProvider>
    </NavbarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
