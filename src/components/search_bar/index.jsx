import React from 'react';
import { PLACEHOLDER, LENS_TEXT } from '../../constants';
import lensSvg from '../../assets/svg/lens.svg';

import style from './search_bar.module.css';

function SearchBar(props) {
  /* Props */
  const { handleChange } = props;
  return (
    <div className={style.input__icons}>
      <img src={lensSvg} className={style.icon} alt={LENS_TEXT} />
      <input type="text" placeholder={PLACEHOLDER} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
