import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageDesktop from "./components/LandingPageDesktop";
import Test from "./test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:path(|landing-page-desktop)">
          <LandingPageDesktop {...landingPageDesktopData} />
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const button4Data = {
    children: "GET A QUOTE",
};

const group107Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-2@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-3@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-4@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-5@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-7@2x.png",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-9@2x.png",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-11@2x.png",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-6@2x.png",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-8@2x.png",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-10@2x.png",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-12@2x.png",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-13@2x.png",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-16@2x.png",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-19@2x.png",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-22@2x.png",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-14@2x.png",
    group2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-17@2x.png",
    group3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-20@2x.png",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-23@2x.png",
    group4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-15@2x.png",
    group5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-18@2x.png",
    group6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-21@2x.png",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-24@2x.png",
    text61: "The Webuildd Difference",
    spanText: "What makes us stand miles apart from other firms? We call it “Webuildd Difference”: from the very first time you meet us, to the interaction with our team, the hassle-free engagement and finally the day we hand you the keys to your new home/building, the only standard we accept for ourselves (and our customers) is “Consistent Excellence”. We are never satisfied with our laurels, and our service to you goes far beyond simply putting one brick on top of another. We not only ensure that get quality, but also blend it with creativity, engineering, management, quality and multiple other disciplines to deliver the perfect output for your residential or commercial needs. We have even created our very own",
    spanText2: " ",
    spanText3: "cost estimator",
    spanText4: " ",
    spanText5: "that helps you calculate your probable capital outgo for your upcoming building. We really like to make things easy for our clients",
    rectangle49: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-49@1x.png",
    group7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-34@2x.png",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-35@2x.png",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-38@2x.png",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-36@2x.png",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-37@2x.png",
    text65: "Our Customer Value Propositions",
    text66: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
    rectangle48: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-48@1x.png",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-25@2x.png",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-26@2x.png",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-27@2x.png",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-28@2x.png",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-29@2x.png",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-30@2x.png",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-31@2x.png",
    vector29: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-32@2x.png",
    vector30: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-33@2x.png",
    text63: <>Why Choose Us? Minimum Hassles. <br />Maximum Value</>,
    text64: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
    rectangle50: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-50@1x.png",
};

const group1072Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-2@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-3@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-4@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-5@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-7@2x.png",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-9@2x.png",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-11@2x.png",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-6@2x.png",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-8@2x.png",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-10@2x.png",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-12@2x.png",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-13@2x.png",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-16@2x.png",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-19@2x.png",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-22@2x.png",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-14@2x.png",
    group2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-17@2x.png",
    group3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-20@2x.png",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-23@2x.png",
    group4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-15@2x.png",
    group5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-18@2x.png",
    group6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-21@2x.png",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-24@2x.png",
    text61: "The Webuildd Difference",
    spanText: "What makes us stand miles apart from other firms? We call it “Webuildd Difference”: from the very first time you meet us, to the interaction with our team, the hassle-free engagement and finally the day we hand you the keys to your new home/building, the only standard we accept for ourselves (and our customers) is “Consistent Excellence”. We are never satisfied with our laurels, and our service to you goes far beyond simply putting one brick on top of another. We not only ensure that get quality, but also blend it with creativity, engineering, management, quality and multiple other disciplines to deliver the perfect output for your residential or commercial needs. We have even created our very own",
    spanText2: " ",
    spanText3: "cost estimator",
    spanText4: " ",
    spanText5: "that helps you calculate your probable capital outgo for your upcoming building. We really like to make things easy for our clients",
    rectangle49: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-49@1x.png",
    group7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-34@2x.png",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-35@2x.png",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-38@2x.png",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-36@2x.png",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-37@2x.png",
    text65: "Our Customer Value Propositions",
    text66: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
    rectangle48: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-48@1x.png",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-25@2x.png",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-26@2x.png",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-27@2x.png",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-28@2x.png",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-29@2x.png",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-30@2x.png",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-31@2x.png",
    vector29: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-32@2x.png",
    vector30: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-33@2x.png",
    text63: <>Why Choose Us? Minimum Hassles. <br />Maximum Value</>,
    text64: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
    rectangle50: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-50@1x.png",
};

const group109Data = {
    ourProjects: "Our Projects",
    text73: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
};

const group139Data = {
    children: "ALL",
};

const group99Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard2Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62@2x.png",
    group99Props: group99Data,
};

const group992Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard22Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-1@2x.png",
    group99Props: group992Data,
};

const group993Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard23Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-2@2x.png",
    group99Props: group993Data,
};

const group994Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard24Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-3@2x.png",
    group99Props: group994Data,
};

const group995Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard25Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-4@2x.png",
    group99Props: group995Data,
};

const group996Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard26Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-5@2x.png",
    group99Props: group996Data,
};

const group997Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard27Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-6@2x.png",
    group99Props: group997Data,
};

const group998Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard28Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-7@2x.png",
    group99Props: group998Data,
};

const group999Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard29Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-8@2x.png",
    group99Props: group999Data,
};

const button22Data = {
    children: "VIEW MORE",
};

const group1092Data = {
    ourProjects: "Packages",
    text73: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
};

const group69Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const buttonData = {
    children: "VIEW DETAILS",
};

const packageCardData = {
    basic: "Basic",
    group69Props: group69Data,
    buttonProps: buttonData,
};

const standardData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-78@2x.png",
};

const group692Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button2Data = {
    children: "VIEW DETAILS",
};

const group1112Data = {
    place: "Standard",
    standardProps: standardData,
    group69Props: group692Data,
    buttonProps: button2Data,
};

const premiumData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-80@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-81@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-83@2x.png",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-85@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-84@2x.png",
};

const group693Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button3Data = {
    children: "VIEW DETAILS",
};

const group1122Data = {
    premium: "Premium",
    premiumProps: premiumData,
    group69Props: group693Data,
    buttonProps: button3Data,
};

const group694Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button5Data = {
    children: "VIEW DETAILS",
};

const group113Data = {
    basic: "Luxury",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-86@2x.png",
    group69Props: group694Data,
    buttonProps: button5Data,
};

const group1093Data = {
    ourProjects: "Testimonials",
    text73: "Listen to what our customers say about us. They are the beating heart of our business",
};

const group272Data = {
    text92: "The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Webuild !",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/ellipse-1@2x.png",
    name: "Robert Fox",
    text93: "Bangalore, India",
};

const group2722Data = {
    text92: "The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Webuild !",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/ellipse-1-1@2x.png",
    name: "Annette Black",
    text93: "Bangalore, India",
};

const button32Data = {
    children: "ESTIMATE NOW",
};

const frame12Data = {
    children: "City",
};

const frame122Data = {
    children: "Area of Construction (Sq.ft)",
};

const group86Data = {
    layer1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-97@2x.png",
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/group-85@2x.png",
};

const group862Data = {
    layer1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-98@2x.png",
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/group-85-1@2x.png",
};

const getAQuoteButtonData = {
    children: "GET A QUOTE",
};

const headerWithBackgroundData = {
    place: "HOME",
    text41: "ABOUT US",
    text42: "PROJECTS",
    text43: "GALLERY",
    text44: "INSIGHTS",
    text45: "BLOGS",
    text46: "FAQ’S",
    text47: "CONTACT US",
    group86Props: group862Data,
    getAQuoteButtonProps: getAQuoteButtonData,
};

const landingPageDesktopData = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4@1x.png",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4@1x.png",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4@1x.png",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4@1x.png",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4@1x.png",
    rectangle2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-2@1x.png",
    spanText: <>Gain the Power of “Unified C2C” <br />Unburden yourself while</>,
    spanText2: <> <br /></>,
    spanText3: "we build your future.",
    text2: <>At Webuilld we offer you a completely<br />“Unified Conception to Construction” value proposition.  <br />No more dealing with a dozen sub-contractors or labour hassles when constructing your home or commercial building</>,
    title: "Why Webuild?",
    text3: <>Because we bring to the table XX years of comprehensive experience, XX happy customers blended with <br />trust, reliability and transparency</>,
    apartments: "APARTMENTS",
    buildiings: "BUILDIINGS",
    place: "INTERIOR",
    living: "LIVING",
    frame36: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame37: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame38: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame39: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame40: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame41: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame42: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame43: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame44: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame45: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame46: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame47: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame48: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame49: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame50: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame51: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame52: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame53: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame54: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame55: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame56: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame57: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame58: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame59: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame60: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame61: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame63: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame64: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame65: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame66: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame67: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-36-2@1x.png",
    frame68: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame69: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame70: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame71: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame72: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame73: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame74: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame75: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame76: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame77: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame78: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame79: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame80: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    frame81: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/frame-68-2@1x.png",
    construction: "CONSTRUCTION",
    place2: "INTERIOR",
    costEstimatorBg: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/mask-group@1x.png",
    costEstimator: "Cost Estimator",
    text39: "Our very own software infused with years of experience. Use it to find a probable cost estimation to help you make a better choice",
    image2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-2@2x.png",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-3@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-4@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-5@2x.png",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-6@2x.png",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-7@2x.png",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    place3: "Contact",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-92@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-94@2x.png",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-95@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-96@2x.png",
    text33: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text32: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    followUs: "Follow Us On",
    f1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/f-1@2x.png",
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-321@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-89@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-90@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-91@2x.png",
    button4Props: button4Data,
    group107Props: group107Data,
    group1072Props: group1072Data,
    group109Props: group109Data,
    group139Props: group139Data,
    projectCard2Props: projectCard2Data,
    projectCard22Props: projectCard22Data,
    projectCard23Props: projectCard23Data,
    projectCard24Props: projectCard24Data,
    projectCard25Props: projectCard25Data,
    projectCard26Props: projectCard26Data,
    projectCard27Props: projectCard27Data,
    projectCard28Props: projectCard28Data,
    projectCard29Props: projectCard29Data,
    button22Props: button22Data,
    group1092Props: group1092Data,
    packageCardProps: packageCardData,
    group1112Props: group1112Data,
    group1122Props: group1122Data,
    group113Props: group113Data,
    group1093Props: group1093Data,
    group272Props: group272Data,
    group2722Props: group2722Data,
    button3Props: button32Data,
    frame12Props: frame12Data,
    frame122Props: frame122Data,
    group86Props: group86Data,
    headerWithBackgroundProps: headerWithBackgroundData,
};

