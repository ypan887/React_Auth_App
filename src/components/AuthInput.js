import React from 'react';

const AuthInput = ({value, type, error, getInput}) => {
  const handleChange = (e) => {
    name = e.target.name;
    getInput({[name]: e.target.value})
  }

  return (
    <div className='has-error'>
    { error && <span className='help-block'>{error[0]}</span> }
      <div className='input-wrapper'>
        <object data={`images/${type}.svg`} type='image/svg+xml' className='input-icon'></object>
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
