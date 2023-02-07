/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import { BUTTON_TYPE, PATH } from '../../constants';

function Card(props) {
  const { product } = props;
  const {
    imgUrl, brand, model, price, id,
  } = product;
  return (
    <div>
      <img src={imgUrl} alt={brand} />
      <p>{brand}</p>
      <p>{model}</p>
      <p>{price}</p>
      <Link to={`${PATH.detail}/${id}`}>
        <Button label={BUTTON_TYPE.detail} />
      </Link>
    </div>
  );
}

export default Card;
