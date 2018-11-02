import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iteration: 0,
      targets: [],
      hoveringEle: null,
      mainTarget: null
    };
  }

  handleOnAnimationEnd = e => {
    let { iteration } = this.state;
    let target = e.target;
    iteration++;
    this.setState({ iteration });

    // expand mode
    if (this.props.expand) {
      // Check how many animation have been done
      if (iteration <= 2) {
        this.setState(prevState => ({
          targets: [...prevState.targets, target]
        }));
        return;
      }

      // Add last el in to the target arr
      let { targets } = this.state;
      targets = targets.concat([target]);
      targets.forEach(target => {
        target.children[0].classList = "";
        target.classList.add("selector-expand");
        target.children[0].classList.add("text-expand");
      });
    } else {
      // Single Mode
      if (this.props.name === target.id) {
        this.setState({ mainTarget: target });
        target.children[0].classList = "";
        target.classList.add("selector-expand");
        target.children[0].classList.add("text-expand");
      }
    }
  };

  handleMouseOver = e => {
    if (this.props.expand) {
      return;
    }
    e.stopPropagation();
    let { target } = e;
    // Make sure the mouse is on the parent of the node
    if (target.id) {
      if ((this.state.iteration > 2) & (target !== undefined)) {
        // Collapse the main seletor
        const mainTarget = this.state.mainTarget;
        mainTarget.classList.remove("selector-expand");
        mainTarget.children[0].classList = "";
        mainTarget.children[0].classList.add("text");

        // Fix extra-expanding problem in mobile view
        let { targets } = this.state;
        targets.forEach(t => {
          t.classList.remove("selector-expand");
          t.children[0].classList = "";
          t.children[0].classList.add("text");
        });
        targets = [target];

        // Expand the hovering selector
        this.setState({ hoveringEle: target, targets });
        target.classList.add("selector-expand");
        target.children[0].classList = "";
        target.children[0].classList.add("text-expand");
      }
    }
  };

  handleMouseLeave = e => {
    let target = this.state.hoveringEle;
    if (!target) {
      return;
    }
    if (target.id === this.props.name) {
      return;
    }
    if ((this.state.iteration > 2) & (target !== null)) {
      let target = this.state.hoveringEle;
      const mainTarget = this.state.mainTarget;
      target.classList.remove("selector-expand");
      target.children[0].classList = "";
      target.children[0].classList.add("text");

      // Recover main target
      mainTarget.classList.add("selector-expand");
      mainTarget.children[0].classList = "";
      mainTarget.children[0].classList.add("text-expand");
    }
  };

  render() {
    return (
      <div className="" onAnimationEnd={this.handleOnAnimationEnd}>
        <Link to="/project">
          <div
            className="red-bg selector animated bounce"
            id="Project"
            onMouseOver={this.props.expand ? null : this.handleMouseOver}
            onMouseLeave={this.props.expand ? null : this.handleMouseLeave}
          >
            <div className="text">Project</div>
          </div>
        </Link>
        <a href="https://github.com/daweifeng">
          <div
            className="blue-bg selector animated bounce delay-025"
            id="Github"
            onMouseOver={this.props.expand ? null : this.handleMouseOver}
            onMouseLeave={this.props.expand ? null : this.handleMouseLeave}
          >
            <div className="text">Github</div>
          </div>
        </a>
        <a href="https://s3-us-west-2.amazonaws.com/daweifeng/public/Dawei_Feng_Resume.pdf">
          <div
            className="orange-bg selector animated bounce delay-05"
            id="Resume"
            onMouseOver={this.props.expand ? null : this.handleMouseOver}
            onMouseLeave={this.props.expand ? null : this.handleMouseLeave}
          >
            <div className="text">Resume</div>
          </div>
        </a>
      </div>
    );
  }
}
