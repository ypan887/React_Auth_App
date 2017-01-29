import React from 'react';
import AuthInput from './AuthInput';

const AuthEmail = (props) => {
  return (
    <div className="auth-email">
      <AuthInput
        value = {props.input.email}
        type = "email"
        getInput = {props.getInput}
      />
      <AuthInput
        value = {props.input.password}
        type = "password"
        getInput = {props.getInput}
      />
      {
        props.currentTab === 'sign up'?
          (<div>
            <AuthInput
              value = {props.input.name}
              type = "name"
              getInput = {props.getInput}
            />
            <AuthInput
              value = {props.input.nickname}
              type = "nickname"
              getInput = {props.getInput}
            />
          </div>)
          : null
      }
    </div>
  )
}

export default AuthEmail;
