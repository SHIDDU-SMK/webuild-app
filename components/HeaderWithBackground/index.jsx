import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton from "../GetAQuoteButton";
import "./HeaderWithBackground.css";
import { HashLink as Link } from "react-router-hash-link";

function HeaderWithBackground(props) {
  const { place, text41, text42, text43, text44, text45, text46, text47, group86Props, getAQuoteButtonProps } = props;

  return (
    <div className="header-with-background">
      <div className="frame-35">
        <Group86 layer1={group86Props.layer1} group85={group86Props.group85} className="group-86-1" />
        <div className="frame-34">
          <div className="frame-27">
            <div className="group-87">
              <div className="overlap-group-2">
                <div className="rectangle-61"></div>
                <div className="place-3 valign-text-middle typographybodycaption-14-semi-bold">{place}</div>
              </div>
            </div>
            <div className="text-41 valign-text-middle typographybodycaption-14-semi-bold">{text41}</div>
            <div className="text-42 valign-text-middle typographybodycaption-14-semi-bold">
              <Link to="/test">{text42}</Link></div>
            <div className="text-43 valign-text-middle typographybodycaption-14-semi-bold">{text43}</div>
            <div className="text-44 valign-text-middle typographybodycaption-14-semi-bold">{text44}</div>
            <div className="text-45 valign-text-middle typographybodycaption-14-semi-bold">{text45}</div>
            <div className="text-46 valign-text-middle typographybodycaption-14-semi-bold">{text46}</div>
            <div className="text-47 valign-text-middle typographybodycaption-14-semi-bold">{text47}</div>
          </div>
          <GetAQuoteButton>{getAQuoteButtonProps.children}</GetAQuoteButton>
        </div>
      </div>
    </div>
  );
}

export default HeaderWithBackground;
