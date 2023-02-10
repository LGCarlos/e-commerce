import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './index';

describe('When Breadcrumbs component is render', () => {
  test('it should render correctly', () => {
    render(
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>,
    );
  });
});
