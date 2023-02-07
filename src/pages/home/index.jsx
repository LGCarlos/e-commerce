/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext, useState,
} from 'react';
import { Link } from 'react-router-dom';
import ContextProducts from '../../context/StaticContext';
import style from './home.module.css';
import { BUTTON_TYPE, PATH } from '../../constants';
import Button from '../../components/button';

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
                <Button buttonText={BUTTON_TYPE.detail} />
              </Link>
            </li>
          ))
          : null
      }
      {
        end >= Products.length
          ? null
          : <Button handleClick={() => setEnd(end + 20)} buttonText={BUTTON_TYPE.more} />
}
    </ul>
  );
}

export default Home;
