import React from 'react';

function Select(props) {
  const { handleChange, id, value } = props;
  return (
    <select
      value={value}
      onChange={handleChange}
      id={id}
    >
      <option value={1000}>16gb</option>
      <option value={2000}>32gb</option>
    </select>
  );
}

export default Select;
