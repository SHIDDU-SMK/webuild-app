import React from "react";
import Button4 from "../Button4";
import Group107 from "../Group107";
import Group109 from "../Group109";
import Group139 from "../Group139";
import ProjectCard2 from "../ProjectCard2";
import Button22 from "../Button22";
import PackageCard from "../PackageCard";
import Group1112 from "../Group1112";
import Group1122 from "../Group1122";
import Group113 from "../Group113";
import Group272 from "../Group272";
// import Group129 from "../Group129";
import Button3 from "../Button3";
import Frame12 from "../Frame12";
import Group86 from "../Group86";
import HeaderWithBackground from "../HeaderWithBackground";
import "./LandingPageDesktop.css";
// import Test from "../../test";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../Cardcarousel/cardcarousel.css";
import "../Carousel/carousel.css";
import CardCarousel from "../Cardcarousel";
import Carousel  from "../Carousel";

function LandingPageDesktop(props) {
  const {
    line4,
    line5,
    line6,
    line7,
    line8,
    rectangle2,
    spanText,
    spanText2,
    spanText3,
    text2,
    title,
    text3,
    apartments,
    buildiings,
    place,
    living,
    frame36,
    frame37,
    frame38,
    frame39,
    frame40,
    frame41,
    frame42,
    frame43,
    frame44,
    frame45,
    frame46,
    frame47,
    frame48,
    frame49,
    frame50,
    frame51,
    frame52,
    frame53,
    frame54,
    frame55,
    frame56,
    frame57,
    frame58,
    frame59,
    frame60,
    frame61,
    frame62,
    frame63,
    frame64,
    frame65,
    frame66,
    frame67,
    frame68,
    frame69,
    frame70,
    frame71,
    frame72,
    frame73,
    frame74,
    frame75,
    frame76,
    frame77,
    frame78,
    frame79,
    frame80,
    frame81,
    construction,
    place2,
    costEstimatorBg,
    costEstimator,
    text39,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    quickLinks,
    aboutUs,
    projects,
    gallery,
    knowledgeTransfer,
    blogs,
    faqs,
    place3,
    overlapGroup1,
    vector2,
    overlapGroup2,
    vector3,
    text33,
    text32,
    contactWebuildCom,
    followUs,
    f1,
    instagram,
    vector4,
    vector5,
    vector6,
    button4Props,
    group107Props,
    // group1072Props,
    group109Props,
    group139Props,
    projectCard2Props,
    projectCard22Props,
    projectCard23Props,
    projectCard24Props,
    projectCard25Props,
    projectCard26Props,
    projectCard27Props,
    projectCard28Props,
    projectCard29Props,
    button22Props,
    group1092Props,
    packageCardProps,
    group1112Props,
    group1122Props,
    group113Props,
    group1093Props,
    group272Props,
    group2722Props,
    button3Props,
    frame12Props,
    frame122Props,
    group86Props,
    headerWithBackgroundProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="landing-page-desktop screen">
        <div className="frame-168">
          <div className="overlap-group">
            <div className="group-89">
              <img className="line-4" src={line4} />
              <img className="line-" src={line5} />
              <img className="line--1" src={line6} />
              <img className="line--1" src={line7} />
              <img className="line-" src={line8} />
            </div>
            <div className="rectangle-65"></div>
            <div className="rectangle-66"></div>
            <div className="group-130">
              <div className="overlap-group-1">
                <div className="group-37">
                  <div className="overlap-group-1">
                   <div style={{marginTop:'25px'}}>
                      <Carousel {...LandingPageDesktop}/>
                     </div>
                     
                    <div className="frame-16">
                      <div className="text-1 valign-text-middle animate-enter1">
                        <span>
                          <span className="span0 overpass-semi-bold-white-32px">{spanText}</span>
                          <span className="span1 overpass-semi-bold-white-32px">{spanText2}</span>
                          <span className="span2 ">{spanText3}</span>
                        </span>
                      </div>
                      {/* <p className="text-2 typographybody16-regular">{text2}</p> */}
                      <Button4>{button4Props.children}</Button4>
                    </div>
                  </div>
                </div>
                <div className="header"></div>
              </div>
            </div>
            <div className="group-108">
              <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{title}</h1>
              <p className="text-3 typographybody16-regular">{text3}</p>
              <Group107 {...group107Props} />
            </div>
            {/* <Group107 {...group1072Props} className="group-107" /> */}
            <Group109 ourProjects={group109Props.ourProjects} text73={group109Props.text73} />
            <div className="group-104">
              <Group139>{group139Props.children}</Group139>
              <div className="apartments typographybodycaption-14-semi-bold">{apartments}</div>
              <div className="buildiings typographybodycaption-14-semi-bold">{buildiings}</div>
              <div className="place typographybodycaption-14-semi-bold">{place}</div>
              <div className="living typographybodycaption-14-semi-bold">{living}</div>
            </div>
            <ProjectCard2 rectangle62={projectCard2Props.rectangle62} group99Props={projectCard2Props.group99Props} />
            <ProjectCard2
              rectangle62={projectCard22Props.rectangle62}
              group99Props={projectCard22Props.group99Props}
              className="project-card-4"
            />
            <ProjectCard2
              rectangle62={projectCard23Props.rectangle62}
              group99Props={projectCard23Props.group99Props}
              className="project-card-7"
            />
            <ProjectCard2
              rectangle62={projectCard24Props.rectangle62}
              group99Props={projectCard24Props.group99Props}
              className="project-card-5"
            />
            <ProjectCard2
              rectangle62={projectCard25Props.rectangle62}
              group99Props={projectCard25Props.group99Props}
              className="project-card-6"
            />
            <ProjectCard2
              rectangle62={projectCard26Props.rectangle62}
              group99Props={projectCard26Props.group99Props}
              className="project-card"
            />
            <ProjectCard2
              rectangle62={projectCard27Props.rectangle62}
              group99Props={projectCard27Props.group99Props}
              className="project-card-2"
            />
            <ProjectCard2
              rectangle62={projectCard28Props.rectangle62}
              group99Props={projectCard28Props.group99Props}
              className="project-card-1"
            />
            <ProjectCard2
              rectangle62={projectCard29Props.rectangle62}
              group99Props={projectCard29Props.group99Props}
              className="project-card-8"
            />
            <Button22>{button22Props.children}</Button22>
            <div className="frame-37">
              <img className="frame-36" src={frame36} /><div className="group-129">
              <div className="ellipse-99"></div>
              <div className="ellipse-100"></div>
            </div>
              <img className="frame-" src={frame37} />
              <img className="frame-" src={frame38} />
              <img className="frame-" src={frame39} />
              <img className="frame-" src={frame40} />
              <img className="frame-" src={frame41} />
              <img className="frame-" src={frame42} />
              <img className="frame-" src={frame43} />
              <img className="frame-" src={frame44} />
              <img className="frame-" src={frame45} />
              <img className="frame-" src={frame46} />
              <img className="frame-" src={frame47} />
              <img className="frame-" src={frame48} />
              <img className="frame-" src={frame49} />
              <img className="frame-" src={frame50} />
              <img className="frame-" src={frame51} />
              <img className="frame-" src={frame52} />
              <img className="frame-" src={frame53} />
              <img className="frame-" src={frame54} />
              <img className="frame-" src={frame55} />
              <img className="frame-" src={frame56} />
              <img className="frame-" src={frame57} />
              <img className="frame-" src={frame58} />
              <img className="frame-" src={frame59} />
              <img className="frame-" src={frame60} />
              <img className="frame-" src={frame61} />
              <img className="frame-" src={frame62} />
              <img className="frame-" src={frame63} />
              <img className="frame-" src={frame64} />
              <img className="frame-" src={frame65} />
              <img className="frame-" src={frame66} />
              <img className="frame-" src={frame67} />
              <img className="frame-68" src={frame68} />
              <img className="frame--1" src={frame69} />
              <img className="frame--1" src={frame70} />
              <img className="frame--1" src={frame71} />
              <img className="frame--1" src={frame72} />
              <img className="frame--1" src={frame73} />
              <img className="frame--1" src={frame74} />
              <img className="frame--1" src={frame75} />
              <img className="frame--1" src={frame76} />
              <img className="frame--1" src={frame77} />
              <img className="frame--1" src={frame78} />
              <img className="frame--1" src={frame79} />
              <img className="frame--1" src={frame80} />
              <img className="frame--1" src={frame81} />
            </div>
            <Group109 ourProjects={group1092Props.ourProjects} text73={group1092Props.text73} className="group-110" />
            <div className="group-115">
              <div className="group-102">
                <div className="group-103">
                  <div className="overlap-group1-2">
                    <div className="rectangle-46"></div>
                    <div className="construction typographybodycaption-14-semi-bold">{construction}</div>
                  </div>
                </div>
                <div className="place-1 typographybodycaption-14-semi-bold">{place2}</div>
              </div>
              <div className="flex-row">
                <PackageCard
                  basic={packageCardProps.basic}
                  group69Props={packageCardProps.group69Props}
                  buttonProps={packageCardProps.buttonProps}
                />
                <Group1112
                  place={group1112Props.place}
                  standardProps={group1112Props.standardProps}
                  group69Props={group1112Props.group69Props}
                  buttonProps={group1112Props.buttonProps}
                />
                <Group1122
                  premium={group1122Props.premium}
                  premiumProps={group1122Props.premiumProps}
                  group69Props={group1122Props.group69Props}
                  buttonProps={group1122Props.buttonProps}
                />
                <Group113
                  basic={group113Props.basic}
                  group={group113Props.group}
                  group69Props={group113Props.group69Props}
                  buttonProps={group113Props.buttonProps}
                />
              </div>
            </div>
            <Group109 ourProjects={group1093Props.ourProjects} text73={group1093Props.text73} className="group-110-1" />
            <Group272
              text92={group272Props.text92}
              ellipse1={group272Props.ellipse1}
              name={group272Props.name}
              text93={group272Props.text93}
            />
            <Group272
              text92={group2722Props.text92}
              ellipse1={group2722Props.ellipse1}
              name={group2722Props.name}
              text93={group2722Props.text93}
              className="group-27-1"
            />
            {/* <CardCarousel/> */}
            
            {/* <Group129 /> */}
            <div className="cost-estimator-bg" style={{ backgroundImage: `url(${costEstimatorBg})` }}>
              <div className="rectangle-63"></div>
            </div>
            <div className="group-114">
              <div className="cost-estimator valign-text-middle typographyheadlineh2-extrabold-40">{costEstimator}</div>
              <p className="text-39 valign-text-middle typographybody16-regular">{text39}</p>
            </div>
            <Button3>{button3Props.children}</Button3>
            <div className="group-117">
              <Frame12>{frame12Props.children}</Frame12>
              <Frame12 className="frame-1-1">{frame122Props.children}</Frame12>
            </div>
            <div className="rectangle-67"></div>
            <img className="image-2" src={image2} />
            <img className="image-3" src={image3} />
            <img className="image-4" src={image4} />
            <img className="image-5" src={image5} />
            <img className="image-6" src={image6} />
            <img className="image-7" src={image7} />
            {/* <div className="group-129">
              <div className="ellipse-99"></div>
              <div className="ellipse-100"></div>
            </div> */}
          </div>
          <div className="footer">
            <Group86 layer1={group86Props.layer1} group85={group86Props.group85} />
            <div className="frame-5">
              <div className="quick-links valign-text-middle typographyheadlineh5-extrabold-20">{quickLinks}</div>
              <div className="frame-4">
                <div className="about-us valign-text-middle typographybody16-regular">{aboutUs}</div>
                <div className="frame-4-item valign-text-middle typographybody16-regular">{projects}</div>
                <div className="frame-4-item valign-text-middle typographybody16-regular">{gallery}</div>
                <div className="frame-4-item valign-text-middle typographybody16-regular">{knowledgeTransfer}</div>
                <div className="frame-4-item valign-text-middle typographybody16-regular">{blogs}</div>
                <div className="frame-4-item valign-text-middle typographybody16-regular">{faqs}</div>
              </div>
            </div>
            <div className="group-32">
              <div className="place-2 valign-text-middle typographyheadlineh5-extrabold-20">{place3}</div>
              <div className="flex-row-1">
                <div className="flex-col-1">
                  <div className="map-pin-1">
                    <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                      <img
                        className="vector-5"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-93@2x.png"
                      />
                    </div>
                  </div>
                  <div className="phone">
                    <img className="vector-2" src={vector2} />
                  </div>
                  <div className="mail">
                    <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                      <img className="vector-1" src={vector3} />
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <p className="text-33 typographybody16-regular">{text33}</p>
                  <div className="text-32 valign-text-middle typographybody16-regular">{text32}</div>
                  <div className="contactwebuildcom valign-text-middle typographybody16-regular">
                    {contactWebuildCom}
                  </div>
                </div>
              </div>
            </div>
            <div className="group-33">
              <div className="follow-us valign-text-middle typographyheadlineh5-extrabold-20">{followUs}</div>
              <div className="flex-row-2">
                <div className="facebook-app-symbol">
                  <img className="f-1" src={f1} />
                </div>
                <div className="instagram" style={{ backgroundImage: `url(${instagram})` }}>
                  <div className="overlap-group1">
                    <img className="vector" src={vector4} />
                    <img className="vector-3" src={vector5} />
                  </div>
                </div>
                <div className="twitter">
                  <img className="vector-4" src={vector6} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-header">
          <HeaderWithBackground {...headerWithBackgroundProps} />
        </div>
      </div>
    </div>
  );
}

export default LandingPageDesktop;
