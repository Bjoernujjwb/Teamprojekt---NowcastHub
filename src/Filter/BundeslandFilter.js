import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

const options = [
    { value: 'DE', label: 'Deutschland' },
    { value: 'DE-SH', label: 'Schleswig-Holstein' },
    { value: 'DE-HH', label: 'Hamburg' },
    { value: 'DE-NI', label: 'Niedersachsen' },
    { value: 'DE-HB', label: 'Bremen' },
    { value: 'DE-NW', label: 'Nordrhein-Westfahlen' },
    { value: 'DE-HE', label: 'Hessen' },
    { value: 'DE-RP', label: 'Rheinland-Pfalz' },
    { value: 'DE-BW', label: 'Baden-Württemberg' },
    { value: 'DE-BY', label: 'Bayern' },
    { value: 'DE-SL', label: 'Saarland' },
    { value: 'DE-BE', label: 'Berlin' },
    { value: 'DE-BB', label: 'Brandenburg' },
    { value: 'DE-MV', label: 'Mecklenburg-Vorpommern' },
    { value: 'DE-SN', label: 'Sachsen' },
    { value: 'DE-ST', label: 'Sachsen-Anhalt' },
    { value: 'DE-TH', label: 'Thüringen' }
];

const initialValue = 'Deutschland';

export const MenuScope = () => {
    const [selectedScope, setScope] = useState(initialValue);
    console.log(selectedScope);
  return (
    <div>
      <label for="scope-select">Bundesland:</label>
      <Dropdown
        options={options}
        id="scope-select"
        selectedValue={selectedScope}
        onSelectedValueChange={setScope}
      />
    </div>
  );
};



