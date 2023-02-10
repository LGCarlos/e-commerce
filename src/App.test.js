/* eslint-disable react/jsx-filename-extension */
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';
// import { NO_RESULTS } from './constants';

jest.mock('axios');
global.scrollTo = jest.fn();

describe('When App renders', () => {
  test('it should render correctly when get is successful', async () => {
    axios.get.mockResolvedValueOnce({
      data: [{
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
      }],
    });
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<App />);
    await waitFor(() => screen.getByText('Brand'));
  });
  // test('it should render correctly when get is error', async () => {
  //   axios.mockRejectedValueOnce('error');
  //   // eslint-disable-next-line react/react-in-jsx-scope
  //   render(<App />);
  //   await waitFor(() => screen.getByText(NO_RESULTS));
  // });
});
