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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/detail',
    element: <Detail />,
    errorElement: <Error />,
  },
]);

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProductsList = async () => {
      const url = 'https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product';
      const { data } = await axios.get(url);
      setProducts(data);
      setTimeout(() => {
        setProducts([]);
      }, 1000 * 60 * 60);
    };
    getProductsList();
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
