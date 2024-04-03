// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selectedDate, onChange }) => {
  return (
    <div>
      <label>Date Added:</label>
      <DatePicker selected={selectedDate} onChange={onChange} />
    </div>
  );
};

export default CustomDatePicker;
