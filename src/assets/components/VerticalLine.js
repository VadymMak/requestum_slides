import * as React from "react";
import { useNavbarContext } from "../../hooks/useNavbarContext";

const VerticalLine = (props) => {
  const [navId] = useNavbarContext();

  console.log("Props from line: ", props.id);

  return (
    <svg
      width={3}
      height={120}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.809 0v120"
        // stroke="#fff"
        stroke={navId > props.id ? "#F11869" : "#fff"}
        // stroke="#F11869"
        strokeWidth={2}
        strokeDasharray="6 6"
      />
    </svg>
  );
};

export default VerticalLine;
