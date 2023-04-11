import './styleRentCar.scss'
import carsList from '../CarList/carsList'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RentCarForm } from '../RentCarForm/rentCarForm'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import CustomDateRangePicker from '../DataRangerPicker/customDateRangePicker'

export function RentCar() {
  const navigate = useNavigate()

  // const handleStartReservation = () => {
  //   navigate(`/carro/${car.id}/reserva`)
  // }

  // const car = carsList.find(car => car.id === carId)

  const car = carsList.find(car => car.id)


  const handleGoBack = () => {
    window.history.back()
  }

  const [dateRange, setDateRange] = useState([])

  const handleDateRangeChange = value => {
    setDateRange(value)
  }

  const date = new Date('2023-03-24T10:00:01Z')
  const formattedDate = format(date, 'HH:mm', { locale: ptBR })

  console.log(formattedDate) // Saída: 10:00

  return (
    <>
      <div className="rent-car-det-block">
        <div className="rent-car-det-header">
          <div className="rent-car-det-header-container">
            <span className="rent-car-det-header-text-rating">CARRO </span>
            <h2 className="rent-car-det-header-title">{car.name} </h2>
            <button className="btn-back" onClick={handleGoBack}>
              <IoIosArrowBack />
            </button>
          </div>{' '}
        </div>

        <div className="rent-car-det-text">
          <div className="rentcar-colum-1-content">
            <h2 className="rent-car-det-text-title">Complete seus dados </h2>
            <RentCarForm />
            <div className="calendar">
              <h2 className="calendar-text">
                Selecione sua data e horário de reserva
              </h2>
              <div className="calendar-card">
              <CustomDateRangePicker
              open={true}
              className="custom-date-range-picker"
              onChange={handleDateRangeChange} />

 
              </div>{' '}
            </div>
          </div>

          <div className="rentcar-colum-2-content">
            <div className="rentcar-colum-2-content-card">
              <h2 className="rent-car-det-text-title card">
                Detalhes da reserva
              </h2>
              <div className="rent-car-det-img-block" key={car.id}>
                <div className="rent-car-det-img">
                  <div className="rent-car-det-img-wrapper-1">
                    <img src={car.image1} alt={car.alt} />
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
                <p className="rent-car-det-category">{car.category}</p>
              </div>
              <div className="horizontal-line-card"></div>
              <h3 className="check-in-title">
                Retirada{' '}
                <span className="check-in">
                  {dateRange[0] ? dateRange[0].toLocaleString() : ''}
                </span>
              </h3>
              <div className="horizontal-line-card"></div>
              <h3 className="check-out-title">
                Devolução{' '}
                <span className="check-out">
                  {dateRange[1] ? dateRange[1].toLocaleString() : ''}
                </span>
              </h3>
              <div className="horizontal-line-card"></div>
              {/* <button className="btn-reserva" onClick={handleStartReservation}>
                Confirmar reserva
              </button> */}
              <Link to="/login-reserva" className="btn-reserva">
                Confirmar reserva
              </Link>
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
