import React, { Component } from "react";
import LosAngeles from './imgs/LosAngeles.jpg';
import Sunset from './imgs/sunset.jpg';
import Venice from './imgs/veniceCA.jpg';
import VeniceSkatepark from './imgs/veniceSkatepark.jpg';
import SunsetSkate from './imgs/sunsetSkate.jpg';
import HSU from './imgs/HSU.jpg';
import HSUTwo from './imgs/HSU2.png';
import BigSur from './imgs/BigSur.jpg'
import MyCar from './imgs/MyCar.jpg'
import Slider from "react-slick";
 
class HomeBootstrap extends Component {
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
                <img class="img-fluid" id="skatepark" src={BigSur} alt=""></img>
                </div>
                <div>
                <img class="img-fluid" id="skatepark" src={HSUTwo} alt=""></img>
                </div>
            </Slider>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid" id="skatepark" src={VeniceSkatepark} alt=""></img>
            </div>
        </div>
    </section>

    <section class="container-fluid px-0">
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={LosAngeles} alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2><i class="fab fa-react"></i> Hello Developers!</h2>
                        <p class="lead">Welcome to my React Single Page Application! This 
                        web application was developed using HTML5, CSS3, Javascript (ES6+), 
                        Bootstrap 4, and React! I learned alot duirng this project, but I still
                        have plenty of information to learn. Overall this was a fun, challenging project 
                        that helped me enhance my skills in React, Javascript, Bootstrap, HTML, and CSS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 text-center">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2><i class="fab fa-react"></i> SKATEBOARDING LIFESTYLE</h2>
                        <p class="lead">When we think about reasons of why people skate, 
                            a lot of answers comes to mind. Athleticism, form of expression, 
                            freedom… We can agree that skateboarding is all of those previous 
                            things and much more, being a lifestyle for the ones that are passioned about it. 
                            Skateboarding becomes a way of life when you realize it’s more than a physical activity, 
                            it is a way of thinking and living. Some skaters will start assembling their own boards, 
                            customizing in order to feel it just how they want. The board becomes part of the skater, 
                            a representation of it’s owner and of the culture itself.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src={Sunset} alt="" class="img-fluid"></img>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={SunsetSkate} alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2><i class="fab fa-react"></i> REACT SKATE COMPANY PROJECT</h2>
                        <p class="lead">In 2010 we opened our doors, not as "your," nor "my" skate shop, but 
                            "OUR" skate shop. Our mission is to attend the needs of skateboarders, locals far 
                            and wide, and our community. We are a tight knit family operating the shop and take 
                            pride in connecting with everyone who walks in our doors. We love skateboarding and 
                            will let you know it when you come in. Catch us in the shop or in the streets. 
                            We have a shop team of local's that take pride in repping "OUR" City.  Take a peak at our 
                            videos on Instagram and Facebook to stay up to date on what kind of madness our shop team is up to in the streets.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
  }
}
 
export default HomeBootstrap;