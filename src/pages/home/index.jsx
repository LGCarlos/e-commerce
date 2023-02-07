/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import ContextProducts from '../../context/StaticContext';
import style from './home.module.css';
import { BUTTON_TYPE, PATH } from '../../constants';

function Home() {
  const Products = [...useContext(ContextProducts)];
  return (
    <ul className={style.wrapper}>
      {
        Products
          ? Products.map(({
            id, brand, imgUrl, model, price,
          }) => (
            <li className={style.card} key={id}>

              <img src={imgUrl} alt={model} />
              <h3>{brand}</h3>
              <h5>{model}</h5>
              <p>{price}</p>
              <Link to={`${PATH.detail}/${id}`}>
                <button type="button">{BUTTON_TYPE.detail}</button>
              </Link>
            </li>
          ))
          : null
      }
    </ul>
  );
}

export default Home;
