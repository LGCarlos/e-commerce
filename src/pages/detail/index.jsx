/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useEffect, useState, useContext,
} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  DESCRIPTION, PATH, BUTTON_TYPE, SELECT_ID,
} from '../../constants';
import Description from '../../components/description';
import style from './detail.module.css';
import { ContextBasket } from '../../context/StaticContext';
import Button from '../../components/button';
import Select from '../../components/select';

function Detail() {
  const { productId } = useParams();
  const [basket, setBasket] = useContext(ContextBasket);
  const [product, setProduct] = useState({});
  const [optionsStorage, setOptionsStorage] = useState([]);
  const [optionsColor, setOptionsColor] = useState([]);
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: parseInt(event.target.value, 10),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBasket(basket + 1);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      const url = `${process.env.REACT_APP_API_URL_PRODUCTS}/${productId}`;
      const { data } = await axios.get(url);
      setProduct(data);
      setOptionsStorage(data.options.storages || []);
      setOptionsColor(data.options.colors || []);
      setForm({
        id: productId,
        colorCode: data.options.colors ? data.options.colors[0].code : null,
        storageCode: data.options.storages ? data.options.storages[0].code : null,
      });
    };
    getProductDetail();
  }, []);

  return (
    <div>
      <Link to={`${PATH.home}`}>
        <Button label={BUTTON_TYPE.back} />
      </Link>
      <div>
        <img className={style.imgage__product} src={product.imgUrl} alt={product.brand} />
      </div>
      <div>
        <div>
          <h1>{DESCRIPTION}</h1>
          <Description data={product} />
        </div>
        <div>
          { product
            ? (
              <form onSubmit={handleSubmit}>
                <Select
                  value={form.storageCode}
                  handleChange={handleChange}
                  id={SELECT_ID.storages}
                  options={optionsStorage}
                />
                <Select
                  value={form.colorCode}
                  handleChange={handleChange}
                  id={SELECT_ID.colors}
                  options={optionsColor}
                />
                <button type="submit">{BUTTON_TYPE.add}</button>
              </form>
            )
            : null}
        </div>
      </div>

    </div>
  );
}

export default Detail;
