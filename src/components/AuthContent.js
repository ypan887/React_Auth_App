import React from 'react';
import AuthEmail from './AuthEmail';
import AuthButton from './AuthButton';

const AuthContent = ({
  currentTab,
  isLoading,
  input,
  getInput,
  hideModal,
  validateAuth
  }) => {

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // validate input
    validateAuth(input, currentTab);
  };

  return (
    <div>
      <div className="auth-content">
        <AuthButton
          currentTab = { currentTab }
          hideModal = { hideModal }
          provider = "twitter"
        />
        <p className="auth-seperator">or</p>
        <AuthEmail
          isLoading = { isLoading }
          input = { input }
          currentTab = { currentTab }
          getInput = { getInput }
        />
      </div>
      <button
        className = "auth-submit"
        type = "submit"
        onClick = { handleClick }
        disabled = { isLoading }
      >
        { isLoading? <img src="images/loading.svg" alt="123" className="loading-img"/> : currentTab }
      </button>
    </div>
  )
}

export default AuthContent;
