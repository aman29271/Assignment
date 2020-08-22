import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Task1 from "./task1";
import Task2 from "./task2";
import Home from "./Home";
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
      </Switch>
    </Layout>
  );
}

export default App;
