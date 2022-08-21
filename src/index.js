import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./styles/main.scss";

import { BrowserRouter } from "react-router-dom";
import { NavbarContextProvider } from "./context/NavbarContext";

ReactDOM.render(
  <React.StrictMode>
    <NavbarContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavbarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
