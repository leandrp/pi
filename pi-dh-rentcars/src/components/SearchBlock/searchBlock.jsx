import './searchBlock.scss'
import React from 'react'
import { DateRangePicker } from 'rsuite'
import './styles.css'

function SearchBlock() {

  return (
    <div className="search-block">
      <h1 className='main-title'>Buscar ofertas em aluguel de carros e muito mais</h1>
      <form className="search-block-form">
        <div>
          <input
            type="text"
            id="city"
            name="city"
            className="search-city"
            placeholder="Selecione a cidade"
          />
        </div>
        <DateRangePicker />
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