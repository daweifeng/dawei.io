import React, { Component } from "react";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";
import "./App.css";
import Home from "./components/Home";
import Project from "./components/Project";

ReactGA.initialize("UA-128591856-1");

class App extends Component {
  fireGA = nextState => {
    const { pathName } = nextState.location;
    ReactGA.pageview(pathName);
  };

  render() {
    return (
      <div className="App">
        <Route path="/" exact onEnter={this.fireGA} component={Home} />
        <Route
          path="/project"
          exact
          onEnter={this.fireGA}
          component={Project}
        />
      </div>
    );
  }
}

export default App;
