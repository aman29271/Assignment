import React from "react";
import Axis from "./axis";

export default (props) => {
  const xSettings = {
    translate: "translate(0," + (props.height - props.padding) + ")",
    scale: props.xScale,
  };
  const ySettings = {
    translate: "translate(" + props.padding + ", 0)",
    scale: props.yScale,
  };
  return (
    <g className="xy-axis">
      <Axis {...xSettings} bottom/>
      <Axis {...ySettings} />
    </g>
  );
};
