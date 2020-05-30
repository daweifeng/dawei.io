import React from "react";

import "../styles/post.css";

export default  (): JSX.Element => {

  return (
    <div className="overview">
      <div className="img" style={{backgroundImage: `url(${"https://cdn.worldvectorlogo.com/logos/redis.svg"})`}}>
      </div>
      <div className="content">
        <div className="title">A delayed SMS system</div>
        <div className="info">
          <div className="tags">
            <span>Backend</span>
          </div>

          <div className="time">01/20/2020</div>
        </div>
      </div>
    </div>
  );
};