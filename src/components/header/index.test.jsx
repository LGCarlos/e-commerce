import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('When Header component is render', () => {
  const mockProps = {
    basket: 0,
  };
  test('it should render correctly with empty basket', () => {
    render(
      <BrowserRouter>
        <Header {...mockProps} />
      </BrowserRouter>,
    );
  });
  test('it should render correctly with full basket', () => {
    mockProps.basket = 3;
    render(
      <BrowserRouter>
        <Header {...mockProps} />
      </BrowserRouter>,
    );
  });
});
