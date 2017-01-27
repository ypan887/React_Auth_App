import React from 'react';

const LoggedinView = (props) => {
  const text = `Welcome ${props.userName}! You have loggedin`;
  return (
    <h2>{text}</h2>
  );
}

export default LoggedinView;
