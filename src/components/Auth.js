import React, { Component } from 'react';
import AuthTab from './auth/authTab';
import OauthButton from './auth/oauthButton'

class AuthComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLogIn: true
    }
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }


  render() {
    let logInClassName, signUpClassName = '';

    if(this.state.isLogIn){
      logInClassName = 'current-tab';
    } else {
      signUpClassName = 'current-tab';
    }

    return (
      <div className="auth-pane">


      </div>
    );
  }
}

export default AuthComponent;
