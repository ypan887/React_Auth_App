import React from 'react';
import AuthEmail from './AuthEmail';
import AuthButton from './AuthButton';

const AuthContent = ({currentTab, hideModal}) => {
  return (
    <div>
      <div className="auth-content">
        <AuthButton currentTab={ currentTab } hideModal={hideModal} provider="twitter"/>
        <p className="auth-seperator">or</p>
        <AuthEmail />
      </div>
      <button className="auth-submit" type="submit">{ currentTab }</button>
    </div>
  )
}

export default AuthContent;
