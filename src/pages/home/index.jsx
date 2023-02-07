/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext, useEffect, useState,
} from 'react';
import ContextProducts from '../../context/StaticContext';
import style from './home.module.css';
import {
  BUTTON_TYPE, START,
  ITEMS_DISPLAYED,
  NO_RESULTS,
} from '../../constants';
import Button from '../../components/button';
import Card from '../../components/card';
import SearchBar from '../../components/search_bar';

function Home() {
  const Products = [...useContext(ContextProducts)];
  const [end, setEnd] = useState(ITEMS_DISPLAYED);
  const [searchTerm, setSearchTerm] = useState('');
  const [numCards, setNumCards] = useState(null);

  useEffect(() => {
    const items = document.getElementsByTagName('li');
    setNumCards(items.length);
  }, [Products]);

  return (
    <>
      <SearchBar handleChange={(event) => { setSearchTerm(event.target.value); }} />
      <ul className={style.wrapper}>
        {Products
          ? Products
            .filter((product) => product.model.toLowerCase().includes(searchTerm.toLowerCase())
            || product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(START, end)
            .map((product) => (
              <li key={product.id}>
                <Card product={product} />
              </li>
            ))
          : null}
        {end >= Products.length || numCards < ITEMS_DISPLAYED
          ? null
          : <Button handleClick={() => setEnd(end + ITEMS_DISPLAYED)} label={BUTTON_TYPE.more} />}
        {
          numCards ? null : <p>{NO_RESULTS}</p>
        }
      </ul>
    </>
  );
}

export default Home;
