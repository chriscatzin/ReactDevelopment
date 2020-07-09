import React, { Component } from "react";
 
class Contact extends Component {

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
    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          this.setState({myUsers: data})
        })
      }



    
    render() {
        return(
            <div>                
                <section id="header" class="jumbotron text-center">
                    <h1 class="display-1"><i class="far fa-address-card"></i> Contact Me</h1>
                    <p class="lead"><strong>Do you have any questions? 
                        Please do not hesitate to contact me directly. 
                        I will come back to you within a matter of hours to help you. </strong></p>
                        
                </section>

                <div class="container">
                    <div class="row">

   
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control"></input>
                                <label for="name" class="">Your name</label>
                            </div>
                        </div>



                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control"></input>
                                <label for="email" class="">Your email</label>
                            </div>
                        </div>              

                    </div>



                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="phone" name="phone" class="form-control"></input>
                                <label for="phone" class="">Phone Number</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
            
                        <div class="col-md-12">

                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>

                        </div>
                    </div>


                    <div class="text-center text-md-left">
                        <p id="demo"></p>
                        <button class="btn btn-primary" onClick={this.addNewAccount}>Send</button>
                        
                    </div>
                    

                </div>
                <hr/>

                <div class="container">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myUsers.map((u,i) => {
                            return <tr>
                                <td>{ u.name }</td>
                                <td>{ u.email }</td>
                                <td>{ u.phone }</td>
                            </tr>
                            }
                        )}
                    </tbody>
                </table>
                </div>

                

            </div>
        );
    }
}

export default Contact;