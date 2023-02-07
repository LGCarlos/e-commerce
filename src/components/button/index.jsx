import React from 'react';

function Button(props) {
  const { handleClick, label } = props;
  return (
    <button type="button" onClick={handleClick}>{label}</button>
  );
}

export default Button;
