import React from "react";
import "./Group272.css";
import CardCarousel from "../Cardcarousel";
import "../Cardcarousel/cardcarousel.css";

function Group272(props) {
  const { text92, ellipse1, name, text93, className } = props;

  return (
    <div className={`group-27 ${className || ""}`}>
      <div className="overlap-group3-1">
        <p className="text-35 typographybodycaption-14-semi-bold">{text92}</p>
        <div className="group-120">
          <img className="ellipse-1" src={ellipse1} />
          <div className="flex-col-9">
            <div className="name valign-text-middle typographyheadlineh3-extrabold-30">{name}</div>
            <div className="text-36 valign-text-middle typographybody16-regular">{text93}</div>
          </div>
        </div>
      </div>
      {/* <CardCarousel/> */}
    </div>
  );
}

export default Group272;
