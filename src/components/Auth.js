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

  logIn(){
    return () => {
      if(!this.state.isLogIn){
        this.setState({
          isLogIn: true
        });
      }
    }
  }

  signUp(){
    return () => {
      if(this.state.isLogIn){
        this.setState({
          isLogIn: false
        });
      }
    }
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
        <AuthTab
          logIn={this.logIn}
          signUp={this.signUp}
          isLogIn={this.state.isLogIn}
        />
        <div className="auth-content">
          <OauthButton
            isLogIn={this.state.isLogIn}
            provider="twitter"
          />
          <div className="auth-email">
            <p className="auth-seperator">or</p>
            <div className="input-wrapper">
              <object data="images/envelope.svg" type="image/svg+xml" className="input-icon"></object>
              <input type="email" name="email" className="auth-input" value="" placeholder="your email"/>
            </div>
            <div className="input-wrapper">
              <object data="images/locked.svg" type="image/svg+xml" className="input-icon"></object>
              <input type="password" name="password" className="auth-input" value=""placeholder="your password"/>
            </div>
          </div>
        </div>
        <button className="auth-submit" type="submit">Log in</button>
      </div>
    );
  }
}

export default AuthComponent;
