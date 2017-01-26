import React from 'react';

const AuthTab = ({currentTab, toggleTab}) => {
  let logInClassName, signUpClassName = '';

  if(currentTab === 'log in'){
    logInClassName = 'current-tab';
  } else {
    signUpClassName = 'current-tab';
  }

  return(
    <div className="tab-cotent">
      <ul className="auth-tab">
        <li className={logInClassName} onClick={()=>{toggleTab('log in')}}>Log In</li>
        <li className={signUpClassName} onClick={()=>{toggleTab('sign up')}}>Sign Up</li>
      </ul>
    </div>
  )
}

export default AuthTab;
