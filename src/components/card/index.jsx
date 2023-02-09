/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH, SOLDOUT } from '../../constants';
import style from './card.module.css';

function Card(props) {
  const { product } = props;
  const {
    imgUrl, brand, model, price, id,
  } = product;
  return (
    <Link to={`${PATH.detail}/${id}`}>
      <div className={style.container}>
        <img src={imgUrl} alt={brand} />
        <p className={style.container__brand}>{brand}</p>
        <p className={style.container__model}>{model}</p>
        { price
          ? (
            <p className={style.container__price}>
              {`${price}€`}
            </p>
          ) : (
            <p className={`${style.container__price} ${style.soldout}`}>
              {SOLDOUT}
            </p>
          )}
      </div>
    </Link>
  );
}

export default Card;
