import './searchBlock.scss'
import React from 'react'
import { DateRangePicker } from 'rsuite'
import './styles.css'
// import { Input, InputGroup } from 'rsuite';
// import LocationIcon from '@rsuite/icons/Location';

function SearchBlock() {
  return (
    <div className="search-block">
      <h1 className="main-title">
        Buscar ofertas em aluguel de carros e muito mais
      </h1>
      <form className="search-block-form">
        <div>
          <div className="search-input-wrapper">
            <input
              type="text"
              id="city"
              name="city"
              className="search-city"
              placeholder="Selecione a cidade de retirada"
            />
          </div>
        </div>
        <DateRangePicker placeholder="Data Retidada - Devolução" />
        <div>
          <button type="submit" className="search-btn">
            Pesquisar
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBlock

{
  /* <InputGroup>
  <InputGroup.Addon>
    <LocationIcon />
  </InputGroup.Addon>
  <Input               
    type="text"
    id="city"
    name="city"
    className="search-city"
    placeholder="Selecione a cidade"/>
</InputGroup>  */
}
