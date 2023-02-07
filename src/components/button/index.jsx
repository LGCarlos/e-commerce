import React from 'react';

function Button(props) {
  const { handleClick, buttonText } = props;
  return (
    <button type="button" onClick={handleClick}>{buttonText}</button>
  );
}

export default Button;
