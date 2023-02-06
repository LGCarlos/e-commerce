import React, {
  useContext,
} from 'react';
import ContextProducts from '../../context/StaticContext';

export default function Home() {
  const products = useContext(ContextProducts);
  return (
    <h1>lista</h1>
  );
}
