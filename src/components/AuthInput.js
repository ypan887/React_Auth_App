import React from 'react';

const AuthInput = ({value, type, getInput}) => {
  const handleChange = (e) => {
    name = e.target.name;
    getInput({[name]: e.target.value})
  }

  return (
    <div className="input-wrapper">
      <object data={`images/${type}.svg`} type="image/svg+xml" className="input-icon"></object>
      <input
        type = { type }
        name = { type }
        value= { value }
        placeholder={"your " + type}
        onChange={handleChange}
        className= "auth-input"
      />
    </div>
  )
}

export default AuthInput;
