import React from 'react';
import style from './select.module.css';

function Select(props) {
  const {
    handleChange, id, value, options, label,
  } = props;
  return (
    <div className={style.main}>
      <h3>{label}</h3>
      <select
        value={value}
        onChange={handleChange}
        id={id}
      >
        {options
          ? options.map((o) => <option key={o.code} value={o.code}>{o.name}</option>) : null}
      </select>
    </div>
  );
}

export default Select;
