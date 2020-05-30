import React, { Component } from "react";
import { Route } from "react-router-dom";
import withTracker from "./components/withTracker";
import "./App.css";
import Home from "./components/Home";
import Project from "./components/Project";
import Post from "./components/Post";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={withTracker(Home)} />
        <Route path="/project" exact component={withTracker(Project)} />
        <Route path="/project/:id" exact component={withTracker(Post)} />

        <Footer />
      </div>
    );
  }
}

export default App;
