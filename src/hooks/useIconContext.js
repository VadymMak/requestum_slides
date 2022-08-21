import { IconContext } from "../context/IconContext";
import { useContext } from "react";

export const useIconContext = () => {
  const [iconProps, dispatch] = useContext(IconContext);

  return [iconProps, dispatch];
};
