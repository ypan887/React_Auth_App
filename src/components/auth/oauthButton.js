import React, { Component } from 'react';

class OauthButtonComponent extends Component {
  auth(){
    let BASEURL = 'https://user-auth-api.herokuapp.com/'
    let authUrl = BASEURL + `/auth/${this.props.provider}`
  }

  render() {
    let displayText = (this.props.isLogIn ? 'Log in' : 'Sign up') +
    ` with ${this.props.provider}`
    let oauthClassName = `oauth-icon ${this.props.provider}-icon`

    return(
      <div className="auth-oauth">
        <button className="oauth-button" onclick={}>
          <div className={oauthClassName}></div>
          <div className="oauth-button-text">{displayText}</div>
        </button>
      </div>
    )
  }
}

export default OauthButtonComponent;
