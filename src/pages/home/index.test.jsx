import { renderHook } from '@testing-library/react-hooks';
import Home from './index';

describe('When Home component is render', () => {
  test('it should render correctly', () => {
    renderHook(() => Home());
  });
});
