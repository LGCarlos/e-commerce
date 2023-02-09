import React from 'react';
import style from './button.module.css';

function Button(props) {
  const { handleClick, label } = props;
  return (
    <button className={style.primary} type="button" onClick={handleClick}>{label}</button>
  );
}

export default Button;
