import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="title">Task List</div>
        <div className="buttons">
          <Link to="/task1" className="button is-primary is-light">
            Task1
          </Link>
          <Link to="/task2" className="button is-link is-light">
            Task2
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
