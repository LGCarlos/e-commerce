/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext, useEffect, useState,
} from 'react';
import { ContextProducts } from '../../context/StaticContext';
import style from './home.module.css';
import {
  BUTTON_TYPE, START,
  ITEMS_DISPLAYED,
  NO_RESULTS,
} from '../../constants';
import Button from '../../components/button';
import Card from '../../components/card';
import SearchBar from '../../components/search_bar';
import noResultsSvg from '../../assets/svg/noresults.svg';

function Home() {
  const Products = [...useContext(ContextProducts)];
  const [end, setEnd] = useState(ITEMS_DISPLAYED);
  const [searchTerm, setSearchTerm] = useState('');
  const [numCards, setNumCards] = useState(null);

  useEffect(() => {
    const items = document.getElementsByTagName('li');
    setNumCards(items.length);
  }, [Products]);

  useEffect(() => {
    const detailCrumb = document.querySelector('#Detail');
    detailCrumb.style.visibility = 'hidden';
  }, []);

  return (
    <div className={style.main}>
      <SearchBar handleChange={(event) => { setSearchTerm(event.target.value); }} />
      <div className={style.main__container}>
        <ul className={style.container__products}>
          {Products
            ? Products
              .filter((product) => product.model.toLowerCase().includes(searchTerm.toLowerCase())
            || product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
              .slice(START, end)
              .map((product) => (
                <li className={style.products__card} key={product.id}>
                  <Card product={product} />
                </li>
              ))
            : null}
        </ul>
        {end >= Products.length || numCards < ITEMS_DISPLAYED
          ? null
          : <Button handleClick={() => setEnd(end + ITEMS_DISPLAYED)} label={BUTTON_TYPE.more} />}
        {
          numCards ? null : (
            <>
              <img src={noResultsSvg} alt={NO_RESULTS} className={style.noresults__img} />
              <h3>{NO_RESULTS}</h3>
            </>
          )
        }
      </div>
    </div>
  );
}

export default Home;
