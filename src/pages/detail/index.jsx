/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useEffect, useState, useContext,
} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  DESCRIPTION, PATH, BUTTON_TYPE, SELECT_ID, OUT_STOCK, SELECT_LABEL,
} from '../../constants';
import Description from '../../components/description';
import style from './detail.module.css';
import { ContextBasket } from '../../context/StaticContext';
import Button from '../../components/button';
import Select from '../../components/select';
import Loader from '../../components/loader';

function Detail() {
  const { productId } = useParams();
  const [basket, setBasket] = useContext(ContextBasket);
  const [loaded, setLoaded] = useState(false);
  const [product, setProduct] = useState({});
  const [optionsStorage, setOptionsStorage] = useState([]);
  const [optionsColor, setOptionsColor] = useState([]);
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: parseInt(event.target.value, 10),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(false);
    (async () => {
      try {
        const addToBasket = async () => {
          const url = process.env.REACT_APP_API_URL_CART;
          const { data } = await axios.post(url, form);
          setBasket(data.count + basket);
          setLoaded(true);
        };
        addToBasket();
      } catch (error) {
        setErrorMessage(error.message);
      }
      return { errorMessage, basket };
    })();
  };

  useEffect(() => {
    const detailCrumb = document.querySelector('#Detail');
    detailCrumb.style.visibility = 'inherit';
    detailCrumb.style.pointerEvents = 'none';
    detailCrumb.style.cursor = 'default';
  }, []);

  useEffect(() => {
    (async () => {
      try {
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
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoaded(true);
      }
      return { errorMessage };
    })();
  }, []);

  return (
    <div>
      {
      loaded
        ? (
          <div className={style.main}>
            <Link to={`${PATH.home}`}>
              <Button label={BUTTON_TYPE.back} />
            </Link>
            <div className={style.main__container}>
              <div>
                <img className={style.imgage__product} src={product.imgUrl} alt={product.brand} />
              </div>
              <div>
                <div>
                  <h1>{DESCRIPTION}</h1>
                  <Description data={product} />
                </div>
                <div>
                  {product && product.price
                    ? (
                      <form onSubmit={handleSubmit}>
                        <div className={style.form__selects}>
                          <Select
                            value={form.storageCode}
                            handleChange={handleChange}
                            id={SELECT_ID.storages}
                            options={optionsStorage}
                            label={SELECT_LABEL.storages}
                          />
                          <Select
                            value={form.colorCode}
                            handleChange={handleChange}
                            id={SELECT_ID.colors}
                            options={optionsColor}
                            label={SELECT_LABEL.colors}
                          />
                        </div>
                        <button className={style.form__button} type="submit">{BUTTON_TYPE.add}</button>
                      </form>
                    )
                    : (<p>{OUT_STOCK}</p>)}
                </div>
              </div>
            </div>
          </div>
        )
        : <Loader />
            }
    </div>
  );
}

export default Detail;
