import React from 'react';
import { PLACEHOLDER } from '../../constants';

function SearchBar(props) {
  const { handleChange } = props;
  return (
    <input type="text" placeholder={PLACEHOLDER} onChange={handleChange} />
  );
}

export default SearchBar;
