import React, { useState } from 'react';

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
      <select value={value} onChange={handleChange} style={{ padding: '20px' }}>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectBox;
