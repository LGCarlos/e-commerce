/* eslint-disable react/jsx-no-constructed-context-values */
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
import { ContextProducts, ContextBasket, ContextSession } from './context/StaticContext';
import Loader from './components/loader';
import Header from './components/header';
import Footer from './components/footer';
import { PATH } from './constants';

function App() {
  /* State */
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [session, setSession] = useState();

  /* Hooks */

  useEffect(() => {
    /* Get Products and set session for 1h */
    (async () => {
      try {
        const getProductList = async () => {
          const url = process.env.REACT_APP_API_URL_PRODUCTS;
          const { data } = await axios.get(url);
          setProducts(data);
          setTimeout(() => {
            setProducts([]);
            setSession(false);
          }, 1000 * 60 * 60);
        };
        getProductList();
      } catch (error) {
        setErrorMessage(error.message);
        setSession(false);
      } finally {
        setLoaded(true);
        setSession(true);
      }
      return { errorMessage, loaded };
    })();
  }, []);

  return (
    <div className="App">
      <ContextProducts.Provider value={products}>
        <ContextBasket.Provider value={[basket, setBasket]}>
          <ContextSession.Provider value={session}>
            {
            loaded
              ? (
                <BrowserRouter>
                  <Header basket={basket} />
                  { session
                    ? (
                      <Routes>
                        <Route path={PATH.home} element={<Home />} errorElement={<Error />} />
                        <Route path={`${PATH.detail}/:productId`} element={<Detail />} errorElement={<Error />} />
                      </Routes>
                    )
                    : <Error />}
                  <Footer />
                </BrowserRouter>
              )
              : <Loader />
        }
          </ContextSession.Provider>
        </ContextBasket.Provider>
      </ContextProducts.Provider>
    </div>
  );
}

export default App;
