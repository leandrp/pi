import './searchBlock.scss';
import React, { useState } from 'react';
import './styles.css';
import CustomDateRangePicker from '../DataRangerPicker/customDateRangePicker';
import CityList from '../City/cityList';

function SearchBlock({ onSubmit }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedCity, selectedDateRange);
  };

  return (
    <div className="search-block">
      <h1 className="main-title">
        Buscar ofertas em aluguel de carros e muito mais
      </h1>
      <form className="search-block-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <CityList onChange={setSelectedCity} />
          <CustomDateRangePicker onChange={setSelectedDateRange} />
          <button type="submit" className="search-btn">
            Pesquisar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBlock;