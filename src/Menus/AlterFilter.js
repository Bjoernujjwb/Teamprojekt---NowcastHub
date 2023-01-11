import React, { useState } from 'react';
import { useData } from '../components/useData';
import { Dropdown } from './Dropdown';

const optionsAge = [
    { value: '00+', label: '00+' },
    { value: '00-04', label: '00-04' },
    { value: '05-14', label: '05-14' },
    { value: '15-34', label: '15-34' },
    { value: '35-59', label: '35-59' },
    { value: '60-79', label: '60-79' },
    { value: '80+', label: '80+' }
];

const initialValueAge = 'Deutschland';

export const MenuAge = () => {
    const [selectedValue, setSelectedValue] = useState(initialValueAge);
    console.log(selectedValue);
  return (
    <div>
      <label for="scope-select">Filter Sie nach Alter:</label>
      <Dropdown
        options={optionsAge}
        id="age-select"
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      />
    </div>
  );
};