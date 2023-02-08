/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './pages/home';
import Detail from './pages/detail';
import Error from './pages/error';
import { ContextProducts, ContextBasket } from './context/StaticContext';
import Loader from './components/loader';
import Header from './components/header';
import { PATH } from './constants';

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(3);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const getProductList = async () => {
          const url = process.env.REACT_APP_API_URL_PRODUCTS;
          const { data } = await axios.get(url);
          setProducts(data);
          setTimeout(() => {
            setProducts([]);
          }, 1000 * 60 * 60);
        };
        getProductList();
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoaded(true);
      }
      return { errorMessage, loaded };
    })();
  }, []);

  return (
    <div className="App">
      <ContextProducts.Provider value={products}>
        <ContextBasket.Provider value={[basket, setBasket]}>
          {
            loaded
              ? (
                <BrowserRouter>
                  <Header basket={basket} />
                  <Routes>
                    <Route path={PATH.home} element={<Home />} errorElement={<Error />} />
                    <Route path={`${PATH.detail}/:productId`} element={<Detail />} errorElement={<Error />} />
                  </Routes>
                </BrowserRouter>

              )
              : <Loader />
        }
        </ContextBasket.Provider>
      </ContextProducts.Provider>
    </div>
  );
}

export default App;
