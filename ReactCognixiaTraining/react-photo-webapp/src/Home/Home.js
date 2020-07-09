import React, { Component } from "react";
import HomeBootstrap from './HomeBootstrap';
 
class Home extends Component {
  render() {
    return (
      <div>
        <section id="header" class="jumbotron text-center">
        <h1 class="display-1"><i class="fab fa-react"></i> Welcome!</h1>
        <p class="lead"><strong>This is a React Single Page Application.</strong></p>
        <p class="lead"><strong>This React app utilizes HTML5, CSS3, Javascript, Bootstrap, and of course React! </strong></p>
       </section>
       <HomeBootstrap></HomeBootstrap>



      </div>
    );
  }
}
 
export default Home;