import React, { Component } from "react";
import Header from "./Header";
import PostOverview from "./PostOverview";

import "../styles/project.css";

class Project extends Component {
  render() {
    return (
      <div className="container project">
        <Header />
        <div className="title">Project</div>
        <div className="posts">
          <PostOverview />
        </div>
        {/* <div className="building">
          <img src={require("../building.svg")} alt="*" />
          <h2>I am updating my stories for you and will be back shortly.</h2>
        </div> */}
      </div>
    );
  }
}

export default Project;
