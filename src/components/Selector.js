import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Selector extends Component {

  constructor(props) {
    super(props);

    this.state = {iteration: 0, targets: [], hoveringEle: null}
  }
  
  handleOnAnimationEnd = (e) => {
    let {iteration} = this.state;
    let target = e.target;
    iteration++;
    this.setState({iteration});

    // expand mode
    if (this.props.expand) {
      // Check how many animation have been done
      if (iteration <= 2) {
        this.setState(prevState => ({targets: [...prevState.targets, target]}))
        return;
      }

      // Add last el in to the target arr
      let {targets} = this.state;
      targets = targets.concat([target]);
      targets.forEach((target) => {
        target.children[0].classList = "";
        target.classList.add("selector-expand");
        target.children[0].classList.add("text-expand");
      })

    } else {
      // Single Mode
      if (this.props.name === target.id ) {
        let {targets} = this.state;
        targets = targets.concat([target]);
        targets.forEach((target) => {
          target.children[0].classList = ""
          target.classList.add("selector-expand")
          target.children[0].classList.add("text-expand")
        })
      }
    }
  }

  handleMouseEnter = (e) => {
    e.stopPropagation()
    let {target} = e;
    // Make sure the mouse is on the parent of the node
    if (target.id) {
      if (target.id === this.props.name) {
        return;
      }
      if (this.state.iteration>2 & target !== undefined) {
        this.setState({hoveringEle: target})
        target.classList.add("selector-expand")
        
        target.children[0].classList = ""
        target.children[0].classList.add("text-expand")
      }
    }
    
  }

  handleMouseLeave = (e) => {
    let target = this.state.hoveringEle;
    if (!target) {
      return;
    }
    if (target.id === this.props.name) {
      return;
    }
    if (this.state.iteration>2 & target !== null) {
      let target = this.state.hoveringEle;
      target.classList.remove("selector-expand");
      target.children[0].classList = "";
      target.children[0].classList.add("text");
    }
  }

  render() {
    return (
      <div className="" onAnimationEnd={this.handleOnAnimationEnd}>
        <div className="red-bg selector animated bounce" id="Project" onMouseEnter={this.props.expand ? null : this.handleMouseEnter} onMouseLeave={this.props.expand ? null :this.handleMouseLeave}>
          <div className="text">
            <Link to="/project">Project</Link>
          </div>
        </div>
        <div className="blue-bg selector animated bounce delay-025" id="Github" onMouseEnter={this.props.expand ? null : this.handleMouseEnter} onMouseLeave={this.props.expand ? null :this.handleMouseLeave}>
          <div className="text">
            <a href="https://github.com/daweifeng">Github </a>
          </div>
        </div>
        <div className="orange-bg selector animated bounce delay-05" id="Resume" onMouseEnter={this.props.expand ? null : this.handleMouseEnter} onMouseLeave={this.props.expand ? null :this.handleMouseLeave}>
          <div className="text">
            <a href="https://s3-us-west-2.amazonaws.com/daweifeng/public/Dawei_Feng_Resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </div>
    );
  };
}


