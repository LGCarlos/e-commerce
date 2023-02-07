/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
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

const router = createBrowserRouter([
  {
    path: `${PATH.home}`,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: `${PATH.detail}/:productId`,
    element: <Detail />,
    errorElement: <Error />,
  },
]);

function App() {
  const [products, setProducts] = useState([]);
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
        <ContextBasket.Provider value={0}>
          <Header />
          {
          loaded
            ? <RouterProvider router={router} />
            : <Loader />
        }
        </ContextBasket.Provider>
      </ContextProducts.Provider>
    </div>
  );
}

export default App;
