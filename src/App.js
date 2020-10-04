import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Page1 from "./Components/Page1";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <h1>my app</h1>
        <div>
          <Link to="/">Home to </Link>| <Link to="/contact">Contact </Link> |
          <Link to="/about">About </Link>|<Link to="/test">test </Link>|
          <Link to="/test2">test2</Link>| <Link to="/page1">Page1</Link>
        </div>
        <hr />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={About} path="/about" exact />
          <Route
            path="/test"
            exact
            render={(matchingProps) => {
              return <div>hello world</div>;
            }}
          />
          <Route
            path="/test2"
            exact
            render={(matchingProps) => {
              return <About {...matchingProps} />;
            }}
          />
          <Route
            path="/page1"
            exact
            render={(matchingProps) => {
              return <Page1 {...matchingProps} />;
            }}
          />
        </Switch>
        <hr />
        <div>this is footer</div>
      </div>
    </Router>
  );
}
export default App;
