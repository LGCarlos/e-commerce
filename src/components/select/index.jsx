import React from 'react';

function Select(props) {
  const {
    handleChange, id, value, options,
  } = props;
  return (
    <select
      value={value}
      onChange={handleChange}
      id={id}
    >
      {
         options
           ? options.map((o) => <option key={o.code} value={o.code}>{o.name}</option>) : null
        }
    </select>
  );
}

export default Select;
