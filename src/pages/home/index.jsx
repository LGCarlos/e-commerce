/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext, useState,
} from 'react';
import ContextProducts from '../../context/StaticContext';
import style from './home.module.css';
import {
  BUTTON_TYPE, START,
  ITEMS_DISPLAYED,
} from '../../constants';
import Button from '../../components/button';
import Card from '../../components/card';

function Home() {
  const Products = [...useContext(ContextProducts)];
  const [end, setEnd] = useState(ITEMS_DISPLAYED);

  return (
    <ul className={style.wrapper}>
      {
        Products
          ? Products.slice(START, end).map((product) => (
            <li key={product.id}>
              <Card product={product} />
            </li>
          ))
          : null
      }
      {
        end >= Products.length
          ? null
          : <Button handleClick={() => setEnd(end + ITEMS_DISPLAYED)} label={BUTTON_TYPE.more} />
}
    </ul>
  );
}

export default Home;
