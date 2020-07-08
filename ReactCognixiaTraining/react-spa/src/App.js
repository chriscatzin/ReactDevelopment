import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import{BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Photography from "./Photography/Photography";

 
class App extends Component {


  render() {
    return (
      <HashRouter>
        <div>

          <nav class="site-header sticky-top py-1">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
              <a href="" class="navbar-brand"><i class="fab fa-react"></i> Chris Catzin</a>
              <a class="py-2 d-none d-md-inline-block"><NavLink exact to="/">Home</NavLink></a>
              <a class="py-2 d-none d-md-inline-block"><NavLink to="/about">About</NavLink></a>
              <a class="py-2 d-none d-md-inline-block"><NavLink to="/contact">Contact</NavLink></a>
              <a class="py-2 d-none d-md-inline-block"><NavLink to="/photography">Photography</NavLink></a>
            </div>
          </nav>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/photography" component={Photography}/>

          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;