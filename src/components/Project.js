import React, { Component } from 'react';
import Header from "./Header";
import Building from "../building.svg"
import "../styles/project.css";

class Project extends Component {

    render() {
        return (
            <div className="container project">
                <Header />
                <div className="title">Project</div>
                <div className="building">
                    <img src={require("../building.svg")} />
                    <h2>I am updating my stories for you and will be back shortly.</h2>
                </div>
            </div>
        );
    }
};

export default Project;