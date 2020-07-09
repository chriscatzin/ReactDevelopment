import React, { Component } from "react";
import PhotographyBootstrap from './PhotographyBootstrap'


 
class Photography extends Component {
  render() {
    return (
      <div>
        <section id="header" class="jumbotron text-center">
          <h1 class="display-1"><i class="fas fa-camera-retro"></i> Photography!</h1>
          <p class="lead"><strong>These photos were taken by: Chris Catzin</strong></p>
          <p class="lead"><strong>Locations: (Venice Beach, California), (Los Angeles, California), (Humboldt State University, California) </strong></p>
        </section>
        <PhotographyBootstrap></PhotographyBootstrap>
      </div>
    );
  }
}
 
export default Photography;