import React, { useState } from 'react';

const BedroomRange = ({ onChange }) => {
  const [minBedrooms, setMinBedrooms] = useState(1);
  const [maxBedrooms, setMaxBedrooms] = useState(5);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMinBedrooms(value);
    if (value > maxBedrooms) {
      setMaxBedrooms(value);
    }
    onChange({ minBedrooms: value, maxBedrooms });
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMaxBedrooms(value);
    if (value < minBedrooms) {
      setMinBedrooms(value);
    }
    onChange({ minBedrooms, maxBedrooms: value });
  };

  return (
    <div>
      <label>Min Bedrooms:</label>
      <input type="number" value={minBedrooms} onChange={handleMinChange} min="1" max="10" />

      <label>Max Bedrooms:</label>
      <input type="number" value={maxBedrooms} onChange={handleMaxChange} min="1" max="10" />
    </div>
  );
};

export default BedroomRange;