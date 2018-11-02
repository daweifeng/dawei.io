import React, { Component } from 'react';
import Header from "./Header";
import "../styles/project.css";

class Project extends Component {

    render() {
        return (
            <div className="container project">
                <Header />
                <div className="title">Project</div>
            </div>
        );
    }
};

export default Project;