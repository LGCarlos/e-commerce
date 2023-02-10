import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Select from './index';

describe('When Select component is render', () => {
  const mockProps = {
    handleChange: jest.fn(),
    id: 'id',
    value: 'value',
    options: [{ code: 'code', name: 'name' }],
    label: 'label',
  };
  test('it should render correctly with options', () => {
    render(
      <BrowserRouter>
        <Select {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });
  test('it should render correctly without options', () => {
    mockProps.options = null;
    render(
      <BrowserRouter>
        <Select {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });
});
