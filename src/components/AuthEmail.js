import React from 'react';
import AuthInput from './AuthInput';

const AuthEmail = ({input, getInput, currentTab, }) => {
  return (
    <div className="auth-email">
      <AuthInput
        value = { input.email }
        type = "email"
        error = { input.errors.email }
        getInput = { getInput }
      />
      <AuthInput
        value = { input.password }
        type = "password"
        error = { input.errors.password }
        getInput = { getInput }
      />
      {
        currentTab === 'sign up'?
          (<div>
            <AuthInput
              value = { input.name }
              type = "name"
              error = { input.errors.name }
              getInput = { getInput }
            />
            <AuthInput
              value = { input.nickname }
              type = "nickname"
              error = { input.errors.nickname }
              getInput = { getInput }
            />
          </div>)
          : null
      }
    </div>
  )
}

export default AuthEmail;
