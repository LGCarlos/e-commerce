import React from 'react';
import { LOGO_TEXT, BASKET_TEXT } from '../../constants/index';
import logo from '../../assets/images/logo.png';
import basket from '../../assets/svg/basket.svg';
import style from './header.module.css';

function Header() {
  return (
    <div className={style.container}>
      <img src={logo} alt={LOGO_TEXT} />
      <div className={style.container__basket}>
        <img src={basket} alt={BASKET_TEXT} />
        <div className={style.basket__number} />
      </div>
    </div>
  );
}

export default Header;
