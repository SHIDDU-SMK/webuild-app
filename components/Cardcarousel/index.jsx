import React  from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Group272 from '../Group272';
import "../Group272/Group272.css";
//import Slide1 from './assets/img/slide-1.webp';
// import Slide2 from './assets/img/slide-2.webp';
// import Slide3 from './assets/img/slide-3.webp';
// import Slide1 from './assets/img/slide-v1.webp';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./cardcarousel.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";


function CardCarousel(props) {

  const { group272Props } = props;
  
      return (
          <>
          <Carousel>
            <Carousel.Item>
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
              {/* <Image
                className="d-block w-100 puff-in-center"
                src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-2@1x.png" height="500px"
                alt="First slide"
                />
              <Carousel.Caption>
                <div className="text-1 valign-text-middle animate-enter1">
                        <span>
                          <span className="span0 overpass-semi-bold-white-32px">{spanText}</span>
                          <span className="span1 overpass-semi-bold-white-32px">{spanText2}</span>
                          <span className="span2 ">{spanText3}</span>
                        </span>
                      </div> */}
                {/* <h1><strong>{spanText} </strong></h1>
                <p className="text-left" style = {{paddingBottom: '10vw'}}>{spanText2}</p> */}
                {/* <button className = 'btn btn-primary'>Read More</button> */}
              
              {/* </Carousel.Caption> */}
              {/* <div style={{display:'flex'}}>
              <div className="card" style={{width:'45%' ,float:"right",borderRadius:'10px'}}>
                <div className="card-body">
                <p className="card-text">{text92}</p>
                <div style={{display:'flex'}}>
                <Image src={ellipse1}  style={{borderRadius:'25%',height:'75px'}}/>
                <li style={{listStyleType:'none',marginLeft:'15px'}}>
                <h2 >{name}</h2>
                <p>{text93}</p>
                </li>
                </div>
                </div>
                </div>
                <div className="card" style={{width:'45%' ,float:"right",marginLeft:'15px',borderRadius:'10px'}}>
                <div className="card-body">
                <p className="card-text">{text92}</p>
                <div style={{display:'flex'}}>
                <Image src={ellipse1}  style={{borderRadius:'25%',height:'75px'}}/>
                <li style={{listStyleType:'none',marginLeft:'15px'}}>
                <h2 >{name}</h2>
                <p>{text92}</p>
                </li>
                </div>
                </div>
                </div>
                </div> */}
                 {/* <div className={`group-27 ${className || ""}`}>
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
                  
                </div> */}
            </Carousel.Item>
            <Carousel.Item>
              {/* <Image
                className=" puff-in-center"
                src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
                alt="Third slide" height="100px" width="100%"
              />
              <Carousel.Caption> */}
                
                {/* <h1 style = {{color : 'black'}}><strong>You can trust us </strong></h1>
                <p style = {{paddingBottom: '10vw'}}>With your construction projects</p> */}
                {/* <button className = 'btn btn-primary'>View Details</button> */}
                
              {/* </Carousel.Caption> */}
              <div style={{display:'flex'}}>
              <div className="card" style={{width:'45%' ,float:"right"}}>
                <div className="card-body">
                <p className="card-text">{text92}</p>
                <div style={{display:'flex'}}>
                <Image src={ellipse1} style={{borderRadius:'25%',height:'75px'}}/>
                <li style={{listStyleType:'none',marginLeft:'15px'}}>
                <h2 >{name}</h2>
                <p>{text92}</p>
                </li>
                </div>
                </div>
                </div>
                <div className="card" style={{width:'45%' ,float:"right",marginLeft:'15px'}}>
                <div className="card-body">
                <p className="card-text">{text92}</p>
                <div style={{display:'flex'}}>
                <Image src={ellipse1} style={{borderRadius:'25%',height:'75px'}}/>
                <li style={{listStyleType:'none',marginLeft:'15px'}}>
                <h2 >{name}</h2>
                <p>{text92}</p>
                </li>
                </div>
                </div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item> 
              {/* <Image  className=" puff-in-center d-block w-100"
                src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-2@1x.png"
                alt="Third slide" />
              <Carousel.Caption> */}
                
                {/* <h1 className="text-right" style = {{ color : 'black'}}><strong>Quality Building</strong></h1>
                <p className="text-right" style = {{paddingBottom: '8vw'}}>Needs a committed supplier of quality materials</p> */}
                {/* <button className = 'btn btn-primary'>More</button> */}
                
              {/* </Carousel.Caption> */}
              <div style={{display:'flex'}}>
              <div className="card" style={{width:'45%' ,float:"right",borderRadius:'6px'}}>
                <div className="card-body">
                <p className="card-text">{text92}</p>
                <div style={{display:'flex'}}>
                <Image src={ellipse1}  style={{borderRadius:'25%',height:'75px'}}/>
                <li style={{listStyleType:'none',marginLeft:'15px'}}>
                <h2 >{name}</h2>
                <p>{text92}</p>
                </li>
                </div>
                </div>
                </div>
                <div className="card" style={{width:'45%' ,float:"right",marginLeft:'15px'}}>
                <div className="card-body">
                <p className="card-text">{text92}</p>
                <div style={{display:'flex'}}>
                <Image src={ellipse1} style={{borderRadius:'25%',height:'75px'}}/>
                <li style={{listStyleType:'none',marginLeft:'15px'}}>
                <h2 >{name}</h2>
                <p>{text92}</p>
                </li>
                </div>
                </div>
                </div>
                </div>
            </Carousel.Item>
          </Carousel>
          </>
       );
    }

export default CardCarousel;