import React, { Component } from "react";
import LosAngeles from './img/LosAngeles.jpg';
import Sunset from './img/sunset.jpg';
import Venice from './img/veniceCA.jpg';
import VeniceSkatepark from './img/veniceSkatepark.jpg';
import SunsetSkate from './img/sunsetSkate.jpg';
import HSU from './img/HSU.jpg';
import HSUTwo from './img/HSU2.png';
import MyCar from './img/MyCar.jpg';
import Slider from "react-slick";
 
class AboutBootstrap extends Component {

  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <section class="container-fluid px-2">
        <div class="row align-items-center">
            <div class="col-lg-6">
            <Slider {...settings}>
                <div>
                <img class="img-fluid" id="skatepark" src={HSU} alt=""></img>
                </div>
                <div>
                <img class="img-fluid" id="skatepark" src={Venice} alt=""></img>
                </div>
                <div>
                <img class="img-fluid" id="skatepark" src={VeniceSkatepark} alt=""></img>
                </div>
                <div>
                <img class="img-fluid" id="skatepark" src={LosAngeles} alt=""></img>
                </div>
                <div>
                <img class="img-fluid" id="skatepark" src={HSUTwo} alt=""></img>
                </div>
                <div>
                <img class="img-fluid" id="skatepark" src={Sunset} alt=""></img>
                </div>
            </Slider>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid" id="skatepark" src={HSUTwo} alt=""></img>
            </div>
        </div>
    </section>

    <section class="container-fluid px-0">
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={SunsetSkate} alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2><i class="fab fa-react"></i> React Skate Company Project</h2>
                        <p class="lead">React Skate Company is my most recent project that
                        I collaberated with my collegues while training for Cognixia. This 
                        Web Application was developed using HTML5, CSS3, Javascript, and 
                        Bootstrap 4. This project was finished within the deadline, met all 
                        the requirements for the client, and the design had a professional look.
                        <br/>
                        <a href="https://github.com/chriscatzin/ReactSkateCompanyWebApp"><strong>React Skate Company Project</strong></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 text-center">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2><i class="fab fa-react"></i> Twitter Android Mobile App</h2>
                        <p class="lead">This project was my last project during my college 
                        career. My classmates and I collaberated to create a Twitter like Mobile 
                        App for our Software Engineering class. This app was developed using 
                        Java and a Twitter API that recieved real Twitter tweets from the users account. 
                        We ended up getting Mobile App of the year from the Humboldt State University Computer
                         Science Department.</p>
                         <a href="https://github.com/chriscatzin/SimpleTweet"><strong>Twitter Android App</strong></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src={MyCar} alt="" class="img-fluid"></img>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={LosAngeles} alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2><i class="fab fa-react"></i> Flixter Android Mobile App</h2>
                        <p class="lead">This project was my side project throughout college, and 
                        I ended up completing this app by the beginning of 2019. This app allowes 
                        a user to view new movies that are out in theaters, gives a description, 
                        roton tomatoes ratings, and allows the user to view a YoutTube trailer of 
                        that movie. This mobile app was developed using Java, a Movie API, and a 
                        YouTube API to fetch the trailer of the movie.</p>
                        <br/>
                        <a href="https://github.com/chriscatzin/Flickster"><strong>Flixter Android App</strong></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
  }
}
 
export default AboutBootstrap;