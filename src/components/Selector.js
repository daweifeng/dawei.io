import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="red-bg selector">
        <div className="text">
          <Link to="/project">Project</Link>
        </div>
      </div>
      <div className="blue-bg selector">
        <div className="text">
          <a href="https://github.com/daweifeng">Github </a>
        </div>
      </div>
      <div className="orange-bg selector">
        <div className="text">
          <a href="https://s3-us-west-2.amazonaws.com/daweifeng/public/Dawei_Feng_Resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
