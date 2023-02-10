import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PLACEHOLDER } from '../../constants';
import SearchBar from './index';

describe('When SearchBar component is render', () => {
  const mockProps = {
    handleChange: jest.fn(),
  };
  test('it should render correctly', () => {
    render(
      <BrowserRouter>
        <SearchBar {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
  });
});
