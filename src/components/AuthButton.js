import React from 'react';
import { authBaseUrl, authOriginUrl } from '../utils/apiConstant';

const AuthButton = ({currentTab, provider}) => {
  const auth = () => {
    let authUrl
      = `${authBaseUrl}/${provider}?auth_origin_url=${authOriginUrl}`
    window.open(authUrl);
  };

  const displayText = currentTab +` with ${provider}`;
  const oauthClassName = `oauth-icon ${provider}-icon`;

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
