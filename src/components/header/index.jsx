/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_TEXT, BASKET_TEXT, PATH } from '../../constants/index';
import logo from '../../assets/images/logo.png';
import basketSvg from '../../assets/svg/basket.svg';
import style from './header.module.css';

function Header(props) {
  const { basket } = props;
  return (
    <div className={style.container}>
      <Link to={`${PATH.home}`}>
        <img src={logo} alt={LOGO_TEXT} />
      </Link>
      <div className={style.container__basket}>
        <img src={basketSvg} alt={BASKET_TEXT} />
        <div className={style.basket__number}>{basket}</div>
      </div>
    </div>
  );
}

export default Header;
