import React from 'react';
import style from './loader.module.css';

function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.loader__ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
