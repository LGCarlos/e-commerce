import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SOLDOUT } from '../../constants';
import Card from './index';

describe('When Card component is render', () => {
  const mockProps = {
    product: {
      imgUrl: 'src', brand: 'brand', model: 'model', price: 200, id: 'id',
    },
  };
  test('it should render correctly with price', () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(mockProps.product.brand)).toBeInTheDocument();
  });
  test('it should render correctly without price', () => {
    mockProps.product.price = null;
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(SOLDOUT)).toBeInTheDocument();
  });
});
