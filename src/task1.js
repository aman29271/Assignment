import React from "react";

import bulma from "./scss/bulma.module.scss";
import Chart from './components/Chart'
const Task1 = () => {
  return (
    <section className={bulma["section"]}>
      <div className={bulma["container"]}>
        <Chart />
      </div>
    </section>
  );
};
export default Task1;
