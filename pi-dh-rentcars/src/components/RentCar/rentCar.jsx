import './styleRentCar.scss'
import carsList from '../CarList/carsList'
import {
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaUser,
  FaSnowflake,
  FaCog,
  FaCarSide,
  FaSuitcase
} from 'react-icons/fa'
import { BiShieldQuarter } from 'react-icons/bi'
import { DateRangePicker } from 'rsuite'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RentCarForm } from '../RentCarForm/rentCarForm'

export function RentCar() {
  const navigate = useNavigate()

  const handleStartReservation = () => {
    navigate(`/carro/${car.id}/reserva`)
  }

  // const car = carsList.find(car => car.id === carId)

  const car = carsList.find(car => car.id)

  const { beforeToday } = DateRangePicker

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className="rent-car-det-block">
        <div className="rent-car-det-header">
          <span className="rent-car-det-header-text-rating">CARRO </span>
          <h2 className="rent-car-det-header-title">{car.name} </h2>
          <button className="btn-back" onClick={handleGoBack}>
            <IoIosArrowBack />
          </button>
        </div>

        <div className="rent-car-det-text">
          <div className="rentcar-colum-1-content">
            <div className="rent-car-det-text-content">
              <h2 className="rent-car-det-text-title">Complete seus dados </h2>
              <RentCarForm />
            </div>
            <div className="calendar">
              <h2 className="calendar-text">
                Selecione sua data e horário de reserva
              </h2>
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
                open={true}
                className="custom-date-range-picker"
              />
            </div>
          </div>

          <div className="rentcar-colum-2-content">
            <div className="rentcar-colum-2-content-card">
              <h2 className="rent-car-det-text-title">Detalhes da reserva</h2>
              <div className="rent-car-det-img-block" key={car.id}>
                <div className="rent-car-det-img">
                  <div className="rent-car-det-img-wrapper-1">
                    <img src={car.image} alt={car.alt} />
                  </div>
                </div>
              </div>
              <div className="rent-car-det-header-card">
                <span className="rent-car-det-header-text-rating">CARRO </span>
                <h2 className="rent-car-det-header-title">{car.name} </h2>
              </div>
              <div className="rent-car-det-rating">
                <>
                  <span className="rent-car-det-star"></span>
                  {Array(car.rating)
                    .fill()
                    .map((_, id) => (
                      <span key={id} className="rent-car-det-star">
                        &#9733;
                      </span>
                    ))}
                </>
              </div>
              <div className="rent-car-det-evaluation">
                <p className="rent-car-det-description">{car.description}</p>
              </div>
              <div className="horizontal-line-card"></div>
              <div className="horizontal-line-card"></div>
              <div className="horizontal-line-card"></div>
              <button className="btn-reserva" onClick={handleStartReservation}>
                Iniciar reserva
              </button>
            </div>
          </div>
        </div>

        <div className="rentcar-footer-rules">
          <div className="rules">
            <h2 className="rules-title">O que você precisa saber:</h2>
            <div className="horizontal-line"></div>
            <div class="rules-text-columns">
              <div className="rules-text-flex">
                <h3 className="rules-text-flex-title">Regras da casa</h3>
                <p className="rules-text-flex-par">
                  Check-in a partir das 07:00h
                </p>
                <p className="rules-text-flex-par">Check-out até as 22:00h</p>
                <p className="rules-text-flex-par">Não fumar dentro do carro</p>
              </div>
              <div className="rules-text-flex">
                {' '}
                <div className="rules-text-flex">
                  <h3 className="rules-text-flex-title">Saúde e segurança</h3>
                  <p className="rules-text-flex-par">
                    Diretrizes de distanciamento social e outras regulamentações
                    relacionadas ao coronavírus se aplicam
                  </p>
                  <p className="rules-text-flex-par">
                    Carros com extintor de incêndio
                  </p>
                  <p className="rules-text-flex-par">Depósito de segurança</p>
                </div>
              </div>
              <div className="rules-text-flex">
                {' '}
                <div className="rules-text-flex">
                  <h3 className="rules-text-flex-title">
                    Política de cancelamento
                  </h3>
                  <p className="rules-text-flex-par">
                    Cancelamentos podem ser realizados até 48 horas antes da
                    data de reserva. Após este período, será cobrada uma taxa de
                    10% referente à indisponibilidade do automóvel para outros
                    clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
