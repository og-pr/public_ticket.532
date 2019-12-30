import React, { Component } from 'react';
import axios from 'axios'; 

import './style.css';

// var used so value can be accessed outside code block
var LINK_URL = 'API_URL'; // enter LINK for YOUR API (which will process a form post)

const Newsletter = () => (
  <section className="newsletter">
    <SignupFormBase />
  </section>
);

const INITIAL_STATE = {
  email: '',
  error: null, 
  aMessage: '',
  textColor: '',
};

///...

class SignupFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  
  // backup method - can be discarded if not used
  clearFeedback = () => {
    this.setState({aMessage: ' '}) 
    this.setState({ state: this.state }); 
  }
  
  clearFeedbackDelay = () => {
    // used to control flow 
    setTimeout(() => { 
    this.setState({aMessage: ' '}) 
    }, 4000); // N = 4 seconds
  }
  
  clearForm = () => {
    // used to control flow 
    setTimeout(() => { 
    this.setState( {email: ''} ); 
    }, 4000); 
  }
  
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); // must be  event.target.name ; if changed, no input allowed
    let eMail = event.target.value; 
  };

  onSubmit = (event) => {
    event.preventDefault();  
    let n = this.state.email.includes("@"); // additional error checking 

    if (n===true) {
        this.setState({ textColor: 'textGreen', aMessage: 'Recording...' }); 
        this.sendProcess();
    } else {
        this.setState({ textColor: 'textRed', aMessage: 'Error. Try again.' }); 
    }// end if
  };

  // o.note: testing from desktop via browswer requires CORS extension  
  sendData = async () => {
    const { email } = this.state;
    let formEmail = email; // was var; is needed, in order to avoid NaN
    formEmail += '_demo'; // add suffix to avoid spam or DOS
    //console.log('email ' +formEmail)

    // o.note: FormData is a special type of object which is not stringifyable ; i.e. cannot be printed using console.log
    var formData = new FormData(); 
    formData.append('Email', formEmail);

    // double check input = see FormData - special object - values
    /* 
    for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    */
   
    // Using Axios API (not axios.post) per https://github.com/axios/axios
    let options = {
      method: 'post',
      url: LINK_URL,
      headers: {
          'content-type': 'multipart/form-data', // only header required by remote API
      },
      data: formData, // "data" is used with FormData 
    };
       
    try {
      let response = await axios(options); // use only with async
      if (response && response.status === 200 ) {
        const arr = ['Thank you !', <p />, 'Check your inbox.'];
        //const arr = ['Thank you ! Data recorded.', <p />, 'No email will be sent (this is a demo).'];
        this.setState({ textColor: 'textGreen', aMessage: arr }); 
        //this.setState({ textColor: 'textGreen', eaMessage: 'Recorded. Thank you ! <br> This is a demo. The email is recorded but NO EMAIL WILL BE SENT.' }); 
        this.clearForm(); 
        this.clearFeedbackDelay(); 
        // this.newFunction(); // do something with data in background
      }
    } catch (err) {
      console.log('😱 error') // from remote API 
      this.setState({ textColor: 'textRed', aMessage: 'Error. Try again.' }); 
      this.clearForm(); // clear UI for better UX
      this.clearFeedbackDelay();
    }
   
  } // end sendData 

  sendProcess = async () => {
    this.sendData();
    //this.clearFeedbackDelay(); // is async = will be too early = wrong location
    //this.clearForm(); // is async = will be too early = wrong location
  }

  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // HTML5 Form Input Pattern  
  render() {
    const { email, error, textColor, aMessage} = this.state;
    const isInvalid = email === '';

    return (
      <form className="formContainer" onSubmit={this.onSubmit}>

        <input
          autoCorrect="off" 
          autoCapitalize="off"
          name="email"
          required
          maxLength="70"
          value={this.state.email}
          onChange={this.onChange}
          type="email"
          placeholder="Enter Your Email Address"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // HTML5 Form Input Pattern 
        />

        &nbsp; <button className="formButton" type="submit">Sign Up</button>

        <div className="tempClass"><br/><span className="formFeedback">{aMessage}</span></div>
      </form>
    );
  }
}

export { SignupFormBase }; // only 1 Only one default export allowed per module.

export default Newsletter;
