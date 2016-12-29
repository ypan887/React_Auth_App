import React, { Component } from 'react';

class AuthTabComponent extends Component {
  render() {
    let logInClassName, signUpClassName = '';

    if(this.props.isLogIn){
      logInClassName = 'current-tab';
    } else {
      signUpClassName = 'current-tab';
    }

    return(
      <div className="tab-cotent">
        <ul className="auth-tab">
          <li className={logInClassName} onClick={this.props.logIn()}><a href="#">Log In</a></li>
          <li className={signUpClassName} onClick={this.props.signUp()}><a href="#">Sign Up</a></li>
        </ul>
      </div>
    )
  }
}

export default AuthTabComponent;
