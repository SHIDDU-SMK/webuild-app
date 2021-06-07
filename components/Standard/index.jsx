import React from "react";
import "./Standard.css";

function Standard(props) {
  const { overlapGroup } = props;

  return (
    <div className="standard">
      <div className="overlap-group1-7" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <img
          className="vector-29"
          src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-79@2x.png"
        />
      </div>
    </div>
  );
}

export default Standard;
