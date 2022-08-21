import { NavbarContext } from "../context/NavbarContext";
import { useContext } from "react";

export const useNavbarContext = () => {
  const [navId, setNavId] = useContext(NavbarContext);

  return [navId, setNavId];
};
