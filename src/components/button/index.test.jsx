/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from './index';

describe('When Button component is render', () => {
  const mockProps = {
    handleClick: jest.fn(), label: 'Button Label',
  };
  test('it should render correctly', () => {
    render(
      <BrowserRouter>
        <Button {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });
});
