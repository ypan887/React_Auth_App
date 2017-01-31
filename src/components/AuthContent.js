import React from 'react';
import AuthEmail from './AuthEmail';
import AuthButton from './AuthButton';

const AuthContent = ({
  currentTab,
  isLoading,
  input,
  error,
  getInput,
  validateInput
  }) => {

  const loadingSVG = require('../images/loading.svg');

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    validateInput(input, currentTab);
  };

  return (
    <div className='has-error'>
      <div className="auth-content">
        <AuthButton
          currentTab = { currentTab }
          provider = "twitter"
        />
        <p className="auth-seperator">or</p>
        <AuthEmail
          input = { input }
          currentTab = { currentTab }
          getInput = { getInput }
        />
      </div>
      { error && <span className='help-block'>{error}</span> }
      <button
        className = "auth-submit"
        type = "submit"
        onClick = { handleClick }
        disabled = { isLoading }
      >
        { isLoading? <img src={ loadingSVG } className="loading-img"/> : currentTab }
      </button>
    </div>
  )
}

export default AuthContent;
