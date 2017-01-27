import React from 'react';

const AuthButton = ({currentTab, hideModal, provider}) => {
  let auth = () => {
    hideModal();
    //let BASEURL = 'https://user-auth-api.herokuapp.com'
    let BASEURL = 'http://localhost:3000';
    let authUrl = BASEURL
                + `/auth/${provider}`
                + '?auth_origin_url=http://localhost:8000';
    let popWin = window.open(authUrl);
  };
  let displayText = currentTab +` with ${provider}`;
  let oauthClassName = `oauth-icon ${provider}-icon`;

  return(
    <div className="auth-oauth">
      <button className="oauth-button" onClick={ auth }>
        <div className={oauthClassName}></div>
        <div className="oauth-button-text">{displayText}</div>
      </button>
    </div>
  );
}

export default AuthButton;
