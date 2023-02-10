import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './index';
import {
  FOOTER_DESCRIPTION,
} from '../../constants/index';

describe('When Footer component is render', () => {
  const date = new Date();
  const year = date.getFullYear();
  test('it should render correctly', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(screen.getByText(`© ${year}, ${FOOTER_DESCRIPTION}`)).toBeInTheDocument();
  });
});
