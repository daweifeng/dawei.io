import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Selector extends Component {

  constructor(props) {
    super(props);

    this.state = {iteration: 0, targets: []}
  }
  
  handleOnAnimationEnd = (e) => {
    let {iteration} = this.state;
    let target = e.target;
    if (iteration < 2) {
      iteration++;
      this.setState(prevState => ({targets: [...prevState.targets, target]}))
      this.setState({iteration});
      return;
    }
    let {targets} = this.state;
    targets = targets.concat([target]);
    targets.forEach((target) => {
      target.children[0].classList = ""
      target.classList.add("selector-expand")
      target.children[0].classList.add("text-expand")
    })

  }
  render() {
    return (
      <div className="" onAnimationEnd={this.handleOnAnimationEnd}>
        <div className="red-bg selector animated bounce">
          <div className="text">
            <Link to="/project">Project</Link>
          </div>
        </div>
        <div className="blue-bg selector animated bounce delay-025">
          <div className="text">
            <a href="https://github.com/daweifeng">Github </a>
          </div>
        </div>
        <div className="orange-bg selector animated bounce delay-05">
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


