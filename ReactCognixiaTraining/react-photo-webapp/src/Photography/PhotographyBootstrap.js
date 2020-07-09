import React, { Component } from "react";
import LosAngeles from './img/LosAngeles.jpg';
import Sunset from './img/sunset.jpg';
import HSU from './img/HSU.jpg';
import HSUTwo from './img/HSU2.png'
import VeniceSkatepark from './img/veniceSkatepark.jpg';
import SunsetSkate from './img/sunsetSkate.jpg';
import BigSur from './img/BigSur.jpg'
import MyCar from './img/MyCar.jpg'
 
class PhotographyBootstrap extends Component {
  render() {
    return (
        <div>
            <section class="container-fluid px-2">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <img class="img-fluid" id="venice" src={HSU} alt=""></img>
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
            <div class="col-md-6 order-2 order-md-1">
                <img src={HSUTwo} alt="" class="img-fluid"></img>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={BigSur} alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-6 order-2 order-md-1">
                <img src={Sunset} alt="" class="img-fluid"></img>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={SunsetSkate} alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-6 order-2 order-md-1">
                <img src={MyCar} alt="" class="img-fluid"></img>
            </div>
        </div>
    </section>
        </div>
    );
  }
}
 
export default PhotographyBootstrap;