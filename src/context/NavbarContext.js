import { createContext, useState } from "react";

export const NavbarContext = createContext(null);

export const NavbarContextProvider = ({ children }) => {
  return (
    <NavbarContext.Provider value={useState(1)}>
      {children}
    </NavbarContext.Provider>
  );
};
