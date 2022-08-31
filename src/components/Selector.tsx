import React, { AnimationEventHandler, Component } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  expand: boolean;
  name?: string;
}

interface State {
  iteration: number;
  targets: HTMLDivElement[];
  hoveringEle?: HTMLDivElement;
  mainTarget?: HTMLDivElement;
}

export default class Selector extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      iteration: 0,
      targets: [],
    };
  }

  handleOnAnimationEnd: AnimationEventHandler = (e) => {
    let { iteration } = this.state;
    let target = e.target as HTMLDivElement;
    iteration++;
    this.setState({ iteration });

    // expand mode
    if (this.props.expand) {
      // Check how many animation have been done
      if (iteration <= 2) {
        this.setState((prevState) => ({
          targets: [...prevState.targets, target],
        }));
        return;
      }

      // Add last el in to the target arr
      let { targets } = this.state;
      targets = targets.concat([target]);
      targets.forEach((target) => {
        target.children[0].classList.remove(...target.children[0].classList);
        target.classList.add('selector-expand');
        target.children[0].classList.add('text-expand');
      });
    } else {
      // Single Mode
      if (this.props.name === target.id) {
        this.setState({ mainTarget: target });
        target.children[0].classList.remove(...target.children[0].classList);
        target.classList.add('selector-expand');
        target.children[0].classList.add('text-expand');
      }
    }
  };

  handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.expand) {
      return;
    }
    e.stopPropagation();
    let target = e.target as HTMLDivElement;
    // Make sure the mouse is on the parent of the node
    if (target.id) {
      if (this.state.iteration > 2 && target !== undefined) {
        // Collapse the main seletor
        const mainTarget = this.state.mainTarget;
        mainTarget?.classList.remove('selector-expand');
        mainTarget?.children[0].classList.remove(...mainTarget?.classList);
        mainTarget?.children[0].classList.add('text');

        // Fix extra-expanding problem in mobile view
        let targets = this.state.targets;
        targets.forEach((t: HTMLDivElement) => {
          t.classList.remove('selector-expand');
          t.children[0].classList.remove(...t.children[0].classList);
          t.children[0].classList.add('text');
        });
        targets = [target];

        // Expand the hovering selector
        this.setState({ hoveringEle: target, targets });
        target.classList.add('selector-expand');
        target.children[0].classList.remove(...target.children[0].classList);
        target.children[0].classList.add('text-expand');
      }
    }
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
    let target = this.state.hoveringEle;
    if (!target) {
      return;
    }
    if (target.id === this.props.name) {
      return;
    }
    if (this.state.iteration > 2 && target !== null) {
      let target = this.state.hoveringEle;
      const mainTarget = this.state.mainTarget;
      target?.classList.remove('selector-expand');
      target?.children[0].classList.remove(...target.children[0].classList);
      target?.children[0].classList.add('text');

      // Recover main target
      mainTarget?.classList.add('selector-expand');
      mainTarget?.children[0].classList.remove(
        ...mainTarget.children[0].classList
      );
      mainTarget?.children[0].classList.add('text-expand');
    }
  };

  render() {
    return (
      <div className="" onAnimationEnd={this.handleOnAnimationEnd}>
        <Link to="/journey">
          <div
            className="red-bg selector animated bounce"
            id="Journey"
            onMouseOver={this.props.expand ? undefined : this.handleMouseOver}
            onMouseLeave={this.props.expand ? undefined : this.handleMouseLeave}
          >
            <div className="text">Journey</div>
          </div>
        </Link>
        <a href="https://www.linkedin.com/in/fengdawei/">
          <div
            className="blue-bg selector animated bounce delay-025"
            id="Github"
            onMouseOver={this.props.expand ? undefined : this.handleMouseOver}
            onMouseLeave={this.props.expand ? undefined : this.handleMouseLeave}
          >
            <div className="text">LinkedIn</div>
          </div>
        </a>
        <a href="https://github.com/daweifeng">
          <div
            className="orange-bg selector animated bounce delay-05"
            id="Resume"
            onMouseOver={this.props.expand ? undefined : this.handleMouseOver}
            onMouseLeave={this.props.expand ? undefined : this.handleMouseLeave}
          >
            <div className="text">Github</div>
          </div>
        </a>
      </div>
    );
  }
}
