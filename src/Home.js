import React from "react";
import { Link } from "react-router-dom";
import bulma from "./scss/bulma.module.scss";
const Home = () => {
  return (
    <section className={bulma["section"]}>
      <div className={bulma.container}>
        <div className={bulma.title}>Task List</div>
        <div className={bulma["buttons"]}>
          <Link to="/task1" className={`${bulma.button} ${bulma["is-primary"]} ${bulma['is-light']}`}>
            Task1
          </Link>
          <Link to="/task2" className={`${bulma.button} ${bulma["is-link"]} ${bulma['is-light']}`}>
            Task2
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
