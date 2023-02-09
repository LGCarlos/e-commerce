import React from 'react';
import errorSvg from '../../assets/svg/error.svg';
import { ERROR_TEXT, ERROR_ICON } from '../../constants';
import style from './error.module.css';

function Error() {
  return (
    <div className={style.main__container}>
      <img src={errorSvg} alt={ERROR_ICON} />
      <h1>{ERROR_TEXT}</h1>
    </div>
  );
}

export default Error;
