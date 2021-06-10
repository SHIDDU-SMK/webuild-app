import React  from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import Slide1 from './assets/img/slide-1.webp';
// import Slide2 from './assets/img/slide-2.webp';
// import Slide3 from './assets/img/slide-3.webp';
// import Slide1 from './assets/img/slide-v1.webp';
import "./carousel.css";


function TpCarousel(props) {

    const{
        spanText,
    spanText2,
    spanText3
    } = props;
  
      return (
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100 "
                src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-2@1x.png" height="500px"
                alt="First slide"
                />
              <Carousel.Caption>
                
                {/* <h1><strong>{spanText} </strong></h1>
                <p className="text-left" style = {{paddingBottom: '10vw'}}>{spanText2}</p> */}
                {/* <button className = 'btn btn-primary'>Read More</button> */}
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <Image
                
                src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
                alt="Third slide" height="100px" width="100%"
              />
              <Carousel.Caption>
                
                {/* <h1 style = {{color : 'black'}}><strong>You can trust us </strong></h1>
                <p style = {{paddingBottom: '10vw'}}>With your construction projects</p> */}
                {/* <button className = 'btn btn-primary'>View Details</button> */}
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image  className="  d-block w-100"
                src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-2@1x.png"
                alt="Third slide" />
              <Carousel.Caption>
                
                {/* <h1 className="text-right" style = {{ color : 'black'}}><strong>Quality Building</strong></h1>
                <p className="text-right" style = {{paddingBottom: '8vw'}}>Needs a committed supplier of quality materials</p> */}
                {/* <button className = 'btn btn-primary'>More</button> */}
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       );
    }

export default TpCarousel;