import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './index';

describe('When Loader component is render', () => {
  test('it should render correctly', () => {
    render(
      <BrowserRouter>
        <Loader />
      </BrowserRouter>,
    );
  });
});
