/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants';
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
        <p>{brand}</p>
        <p>{model}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
}

export default Card;
