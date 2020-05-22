import React, { useState } from 'react';
import './select-box.css';
const options = [
  'Select an Option',
  'First Option',
  'Second Option',
  'Third Option',
];

const SelectBox = () => {
  const [value, setValue] = useState('Select an Option');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="selectBox">
      <select value={value} onChange={handleChange}>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className="select-icon">
        <svg
          focusable="false"
          viewBox="0 0 104 128"
          width="25"
          height="35"
          className="icon"
        >
          <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
        </svg>
      </div>
    </div>
  );
};
export default SelectBox;
