/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { DESCRIPTION } from '../../constants';
import Description from '../../components/description';
import style from './detail.module.css';
import { ContextBasket } from '../../context/StaticContext';

function Detail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [basket, setBasket] = useContext(ContextBasket);

  useEffect(() => {
    setBasket(30);
  }, []);

  useEffect(() => {
    const getProductDetail = async () => {
      const url = `${process.env.REACT_APP_API_URL_PRODUCTS}/${productId}`;
      const { data } = await axios.get(url);
      setProduct(data);
    };
    getProductDetail();
  }, []);

  return (
    <div>
      <div>
        <img className={style.imgage__product} src={product.imgUrl} alt={product.brand} />
      </div>
      <div>
        <div>
          <h1>{DESCRIPTION}</h1>
          <Description data={product} />
        </div>
        <div>
          <h1>ACTIONS</h1>
        </div>
      </div>

    </div>
  );
}

export default Detail;
