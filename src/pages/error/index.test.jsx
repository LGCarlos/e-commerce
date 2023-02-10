import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error from './index';
import {
  ERROR_TEXT,
} from '../../constants/index';

describe('When Error component is render', () => {
  test('it should render correctly', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );
    expect(screen.getByText(ERROR_TEXT)).toBeInTheDocument();
  });
});
