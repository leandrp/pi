import React, { useState } from 'react';
import Select from 'react-select';

const cities = [
  { label: 'São Paulo - SP', value: 'São Paulo - SP' },
  { label: 'Rio de Janeiro - RJ', value: 'Rio de Janeiro - RJ' },
  { label: 'Brasília - DF', value: 'Brasília - DF' },
  { label: 'Belo Horizonte - MG', value: 'Belo Horizonte - MG' },
  { label: 'Salvador - BA', value: 'Salvador - BA' }
];

function CityList() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleChange = (option) => {
    setSelectedCity(option);
  };

  return (
      <Select
        id="city"
        name="city"
        className="search-city"
        options={cities}
        value={selectedCity}
        onChange={handleChange}
        placeholder="Selecione a cidade de retirada"
      />

  );
}

export default CityList;
