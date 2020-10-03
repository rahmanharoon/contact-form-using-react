import React, { Component } from 'react';
import './App.css';
//import Contact from './Components/Contact';
import axios from 'axios'



class Contact extends Component {
    constructor(props) {
        super(props)

        this.state= {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    numberhandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    messagehandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit = async (event) => {
        let url="http://localhost:4000/submit";
        //alert( 'Thank you for contacting')
        event.preventDefault()
        console.log(this.state);
        try {


            let data =  await axios(url, { method:'POST',data: this.state, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
            console.log(data);

        } catch (error) {
            console.log(error)
        }

    }


  render(){
    return (
       <div className="wrapper">
        <div className="form-wrapper">
          <h1>Connect With Me!!</h1>

          <form onSubmit={this.handleSubmit} noValidate action="/" method="post">
            <div className="name-wrapper">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
               type="text"
                className=""
                 placeholder="Enter your First-Name"
                  type="text"
                   name="firstName"
                    noValidate
                    value={this.state.firstName}
                    onChange={this.firsthandler}
                    />
                    </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
               type="text"
                className=""
                 placeholder="Enter your Last-Name"
                  type="text"
                   name="lastName"
                    noValidate
                    value={this.state.lastName}
                    onChange={this.lasthandler}
                    />
                    </div>
                    </div>
             <div className="email">
              <label htmlFor="email">E-Mail</label>
              <input
               type="text"
                className=""
                 placeholder="Enter your E-Mail"
                  type="email"
                   name="email"
                    noValidate
                    value={this.state.email}
                    onChange={this.emailhandler}
                    />
                    </div>
            <div className="phonenumber">
              <div className="phonelabel">
              <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <div className="phoneinput">
              <input
               type="text"
                className=""
                 placeholder="Enter your Phone-Number"
                  type="text"
                   name="phoneNumber"
                    noValidate
                    value={this.state.phoneNumber}
                    onChange={this.numberhandler}
                    />
                    </div>
                  </div >
                  <div className="message">
                    <label>Leave a message:
                      <textarea className="textarea" placeholder="Type something" value={this.state.message} onChange={this.messagehandler} />
                    </label>
                    </div>


              <button className="submit" type="submit">Submit</button>
              </form>
              </div>
              </div>

    );
  }
 }
export default Contact;
