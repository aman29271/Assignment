import React, { useState } from "react";

import bulma from "../scss/bulma.module.scss";
import ScatterPlot from "./ScatterPlot";

const Chart = () => {
  const styles = {
    width: 300,
    height: 300,
    padding: 30,
  };

  const numDataPoints = 50;

  const randomNum = () => Math.floor(Math.random() * 1000);

  const randomDataSet = () => {
    return Array.apply(null, { length: numDataPoints }).map(() => [
      randomNum(),
      randomNum(),
    ]);
  };
  const [dataPoints, setDatapoints] = useState(randomDataSet());

  const randomizeData = () => {
    setDatapoints(randomDataSet());
  };

  return (
    <div>
      <h1 className={`${bulma["title"]} ${bulma["is-spaced"]}`}>
        Random chart
      </h1>
      <ScatterPlot data={dataPoints} {...styles} />
      <div className={bulma["controls"]}>
        <button
          className={`${bulma["button"]} ${bulma["is-link"]}`}
          onClick={() => randomizeData()}
        >
          Randomize Data
        </button>
      </div>
    </div>
  );
};
export default Chart;
