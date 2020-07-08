import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component{

  collectUserInfo = () =>{
    var name = ReactDOM.findDOMNode(this.refs.txtName).value;
    var salary = ReactDOM.findDOMNode(this.refs.txtSalary).value;
    var des = ReactDOM.findDOMNode(this.refs.txtDesignation).value;
    var city = ReactDOM.findDOMNode(this.refs.txtCity).value;
    ReactDOM.findDOMNode(this.refs.update).innerHTML = "Hello " + name;
    
  }

  render(){
    return(
      <div className="App">
        <h1> Registration Form</h1>

        <input type="text" ref="txtName" placeholder="Enter Name"/>
        <input type="text" ref="txtSalary" placeholder="Enter Salary"/>
        <input type="text" ref="txtDesignation" placeholder="Enter Designation"/>
        <input type="text" ref="txtCity" placeholder="Enter City"/>

        <button onClick={this.collectUserInfo}> Test Ref</button>

        <h1 ref="update"></h1>
      </div>
    )
  }
}

export default App;
