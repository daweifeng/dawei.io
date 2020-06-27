import React, { Component } from "react";

import { getPosts } from "../service/ghost";
import Header from "./Header";
import PostOverview from "./PostOverview";

import "../styles/project.css";


type myState = {
  posts: any
}

class Journey extends Component<{}, myState> {
  _isMounted: boolean;

  constructor(props: any) {
    super(props);

    this.state = {
      posts: []
    };

    this._isMounted = true;
  }

  async componentDidMount() {
    const posts = await getPosts();

    this._isMounted && this.setState({ posts });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderPosts = () => {
    return this.state.posts.map((post: any, index: any) => (
      <PostOverview data={post} key={`post__${index}`} />
    )); 
  }

  render() {
    return (
      <div className="container project">
        <Header />
        <div className="title">Journey</div>
        <div className="posts">
          {this.renderPosts()}
        </div>
        {/* <div className="building">
          <img src={require("../building.svg")} alt="*" />
          <h2>I am updating my stories for you and will be back shortly.</h2>
        </div> */}
      </div>
    );
  }
}

export default Journey;
