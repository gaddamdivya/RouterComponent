import React from "react";
import Home2 from "./Home2";
import { Link, Route } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>
        <Link to="/home2">Home Page</Link>
      </div>
      <div>
        <Route component={Home2} path="/" exact />
      </div>
    </div>
  );
};

export default Home;
