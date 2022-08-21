import * as React from "react";

const VerticalLine = (props) => (
  <svg
    width={3}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.809 0v120"
      stroke="#F11869"
      strokeWidth={2}
      strokeDasharray="6 6"
    />
  </svg>
);

export default VerticalLine;
