/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Detail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductDetail = async () => {
      const url = `${process.env.REACT_APP_API_URL_PRODUCTS}/${productId}`;
      const { data } = await axios.get(url);
      setProduct(data);
    };
    getProductDetail();
  }, []);
  return (
    <h1>{product && product.id}</h1>
  );
}
