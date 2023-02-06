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
import Context from './context/StaticContext';
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
  useEffect(() => {
    const getProductList = async () => {
      const url = process.env.REACT_APP_API_URL_PRODUCTS;
      const { data } = await axios.get(url);
      setProducts(data);
      setTimeout(() => {
        setProducts([]);
      }, 1000 * 60 * 60);
    };
    getProductList();
  }, []);
  return (
    <div className="App">
      <Context.Provider value={products}>
        {
          products.length
            ? <RouterProvider router={router} />
            : <Error />
        }
      </Context.Provider>
    </div>
  );
}

export default App;
