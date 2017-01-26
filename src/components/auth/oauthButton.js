import React, { Component } from 'react';

class OauthButtonComponent extends Component {
  auth(){
    //let BASEURL = 'https://user-auth-api.herokuapp.com'
    let BASEURL = 'http://localhost:3000'
    let authUrl = BASEURL
                + `/auth/${this.props.provider}`
                + '?auth_origin_url=http://localhost:8000'
    let popWin = window.open(authUrl)
    window.addEventListener("message",
      function(e) {
        window.focus();
        debugger;
      }, false);

    //window.location = authUrl;
    /*
    fetch(
      authUrl, {
        mode: 'no-cors',
        method: 'GET'
      }
    )
    .then(function(response) {
      response.redirect("www.google.com")
      return true;
    });
    */
  }

  render() {
    let displayText = (this.props.isLogIn ? 'Log in' : 'Sign up') +
    ` with ${this.props.provider}`
    let oauthClassName = `oauth-icon ${this.props.provider}-icon`

    return(
      <div className="auth-oauth">
        <button className="oauth-button" onClick={ this.auth.bind(this) }>
          <div className={oauthClassName}></div>
          <div className="oauth-button-text">{displayText}</div>
        </button>
      </div>
    )
  }
}

export default OauthButtonComponent;
