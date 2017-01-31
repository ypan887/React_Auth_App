import React from 'react';

const AuthInput = ({value, type, error, getInput}) => {
  const handleChange = (e) => {
    name = e.target.name;
    getInput({[name]: e.target.value})
  }

  const svgURL = require(`../images/${type}.svg`);

  return (
    <div className='has-error'>
    { error && <span className='help-block'>{error[0]}</span> }
      <div className='input-wrapper'>
        <img src={svgURL} alt='icon' className='input-icon' />
        <input
          type = { type }
          name = { type }
          value= { value }
          placeholder = { 'your ' + type }
          onChange = { handleChange }
          className = 'auth-input'
        />
      </div>
    </div>
  )
}

export default AuthInput;
