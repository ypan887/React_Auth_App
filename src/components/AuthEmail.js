import React from 'react';

const AuthEmail = () => {
  return (
    <div className="auth-email">
      <div className="input-wrapper">
        <object data="images/envelope.svg" type="image/svg+xml" className="input-icon"></object>
        <input type="email" name="email" className="auth-input" value="" placeholder="your email"/>
      </div>
      <div className="input-wrapper">
        <object data="images/locked.svg" type="image/svg+xml" className="input-icon"></object>
        <input type="password" name="password" className="auth-input" value=""placeholder="your password"/>
      </div>
    </div>
  )
}

export default AuthEmail;
