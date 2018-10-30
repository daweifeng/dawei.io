import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default App;
