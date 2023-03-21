import './searchBlock.scss'
import React from 'react'
import { DateRangePicker } from 'rsuite'
import './styles.css'
// import { Input, InputGroup } from 'rsuite';
// import LocationIcon from '@rsuite/icons/Location';

function SearchBlock() {
  const { beforeToday } = DateRangePicker

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
        <DateRangePicker
          disabledDate={beforeToday()}
          format="dd-MM-yyyy HH:mm"
          locale={{
            sunday: 'Dom',
            monday: 'Seg',
            tuesday: 'Ter',
            wednesday: 'Qua',
            thursday: 'Qui',
            friday: 'Sex',
            saturday: 'Sab',
            ok: 'Aplicar',
            today: 'Hoje',
            yesterday: 'Ontem',
            hours: 'Horas',
            minutes: 'Minutos'
          }}
          placeholder="Data e Hora: Retidada | Devolução"
        />

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
