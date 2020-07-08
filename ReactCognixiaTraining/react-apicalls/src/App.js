import React, { Component } from 'react';
import './App.css';
// import '../public/jquery-3.5.1min.js';

class App extends Component{

  constructor(){
    super();

    this.state = {
      myUsers: []
    }
    this.getUserInfo()

  }

  getUserInfo = () => {
    // The q3 way, which is also used by Jquery interally

    // We get a method call fetch

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      this.setState({myUsers: data})
    })
  }


  render(){
    return(
      <div>
        <table className="table table-hover">
          <thead>
            <th>Album</th>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail</th>
          </thead>
          { this.state.myUsers.map((u,i) => <tr>
          <td> { u.albumId } </td>
          <td> { u.id } </td>
          <td> { u.title } </td>
          <td> { u.url } </td>
          <td> <img className="rounded-circle" style={{borderRadius: '5px'}} src={ u.thumbnailUrl }></img> </td>
          <td> <button className="glyphicon glyphicon-plus"> </button> </td>
          <td> <button className="glyphicon glyphicon-pencil"> </button> </td>
          <td> <button className="glyphicon glyphicon-filter"> </button> </td>
        </tr>  
        )})
        </table>
      </div>
    )
  }
}

export default App;
