/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext, useState,
} from 'react';
import { Link } from 'react-router-dom';
import ContextProducts from '../../context/StaticContext';
import style from './home.module.css';
import { BUTTON_TYPE, PATH } from '../../constants';

function Home() {
  const start = 0;
  const Products = [...useContext(ContextProducts)];
  const [end, setEnd] = useState(20);

  return (
    <ul className={style.wrapper}>
      {
        Products
          ? Products.slice(start, end).map(({
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
      {
        end >= Products.length
          ? null
          : <button type="button" onClick={() => setEnd(end + 20)}>See More</button>
}
    </ul>
  );
}

export default Home;
