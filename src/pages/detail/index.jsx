/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useEffect, useState, useContext,
} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DESCRIPTION, PATH, BUTTON_TYPE } from '../../constants';
import Description from '../../components/description';
import style from './detail.module.css';
import { ContextBasket } from '../../context/StaticContext';
import Button from '../../components/button';
import Select from '../../components/select';

function Detail() {
  const { productId } = useParams();
  const [basket, setBasket] = useContext(ContextBasket);
  const [product, setProduct] = useState({});
  const [form, setForm] = useState({
    id: productId,
    colorCode: undefined,
    storageCode: undefined,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setBasket(basket + 1);
  };

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
          <h1>ACTIONS</h1>
          <form onSubmit={handleSubmit}>
            <Select
              value={form.storageCode}
              handleChange={handleChange}
              id="colorCode"
            />
            <button type="submit">Add to cart</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Detail;
