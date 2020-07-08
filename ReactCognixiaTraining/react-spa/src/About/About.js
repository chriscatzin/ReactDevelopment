import React, { Component } from "react";
import AboutBootstrap from './AboutBootstrap';
 
class About extends Component {
  render() {
    return (
      <div>
        <section id="header" class="jumbotron text-center">
        <h1 class="display-1"><i class="fas fa-user-tie"></i> About Me</h1>
        <p class="lead"><strong>Hello! My name is Chris Catzin, and I'm from 
          San Pedro, CA, aka Los Angeles, California. </strong></p>
          <p class="lead"><strong>I graduated last year from Humboldt State 
            University with a Bachelor's in Computer Science. </strong></p>
          <p class="lead"><strong>Other than programming,
             I love to skateboard, take photos, and surf with some friends during
             my free time. </strong></p>
        </section>

        <AboutBootstrap></AboutBootstrap>
      </div>
      
    );
  }
}
 
export default About;