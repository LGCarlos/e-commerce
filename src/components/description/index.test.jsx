import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NOT_AVAILABLE } from '../../constants';
import Description from './index';

describe('When Description component is render', () => {
  const mockProps = {
    data: {
      brand: 'Brand',
      model: 'Model',
      price: '300',
      cpu: 'cpu',
      ram: 'ram',
      os: 'os',
      displayResolution: 'displayResolution',
      battery: 'battery',
      weight: 'weight',
      dimentions: 'dimentions',
      primaryCamera: ['primaryCamera', 'primaryCamera2'],
      secondaryCmera: ['secondaryCmera', 'secondaryCmera2'],
    },
  };
  test('it should render correctly with price', () => {
    render(
      <BrowserRouter>
        <Description {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(mockProps.data.brand)).toBeInTheDocument();
  });
  test('it should render correctly without price', () => {
    mockProps.data.price = null;
    mockProps.data.primaryCamera = 'primaryCamera';
    mockProps.data.secondaryCmera = 'secondaryCmera';
    render(
      <BrowserRouter>
        <Description {...mockProps} />
      </BrowserRouter>,
    );
    expect(screen.getByText(`: ${NOT_AVAILABLE}`)).toBeInTheDocument();
  });
});
