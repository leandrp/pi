import './styleCarDetails.scss'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import carsList from '../CarList/carsList'
import {
  FaMapMarkerAlt,
  FaShareAlt,
  FaUser,
  FaSnowflake,
  FaCog,
  FaCarSide,
  FaSuitcase
} from 'react-icons/fa'
import { BiShieldQuarter } from 'react-icons/bi'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CustomDateRangePicker from '../DataRangerPicker/customDateRangePicker'

export function CarDetails({ carId }) {
  const navigate = useNavigate()

  const handleSelectImages = () => {
    setSelectedImages([
      { original: car.image1, thumbnail: car.image1 },
      { original: car.image2, thumbnail: car.image2 },
      { original: car.image3, thumbnail: car.image3 },
      { original: car.image4, thumbnail: car.image4 },
      { original: car.image5, thumbnail: car.image5 }
    ])
    navigate(`/carro/${car.id}`)
  }

  const handleStartReservation = () => {
    navigate(`/carro/${car.id}/reserva`)
  }

  const [selectedImages, setSelectedImages] = useState([])

  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const car = carsList.find(car => car.id === carId)


  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className="car-det-block">
        <div className="car-det-header">
          <div className="car-det-header-container">
            <span className="car-det-header-text-rating">CARRO </span>
            <h2 className="car-det-header-title">{car.name} </h2>
            <button className="btn-back" onClick={handleGoBack}>
              <IoIosArrowBack />
            </button>
          </div>
        </div>

        <div className="car-det-evaluation">
          <div className="car-det-evaluation-container">
            <p className="car-det-category">
              {car.category}
            </p>
            <div className="car-det-rating">
              <>
                <span className="car-det-star">&#9733;&#9733;&#9733;</span>
                {Array(car.rating)
                  .fill()
                  .map((_, id) => (
                    <span key={id} className="car-det-star">
                      &#9733;
                    </span>
                  ))}
                <div className="car-det-note">{car.note}</div>
                <p className="car-det-note-text">{car.notetext}</p>
              </>
            </div>
          </div>
        </div>

        <div className="car-det-img-block-container">
          <div className="icons">
            <FaShareAlt />
            <span onClick={handleToggleFavorite}>
              {isFavorite ? (
                <AiFillHeart className="favorite" />
              ) : (
                <AiOutlineHeart className="not-favorite" />
              )}
            </span>
          </div>

          <div className="car-det-img-block" key={car.id}>
            <div className="car-det-img">
              <div className="car-det-img-wrapper-1">
                <img src={car.image1} alt={car.alt} />
              </div>
              <div className="car-det-img-wrapper-2">
                <div className="car-det-img-item">
                  <img src={car.image2} alt={car.alt} />
                </div>
                <div className="car-det-img-item">
                  <img src={car.image3} alt={car.alt} />
                </div>
                <div className="car-det-img-item">
                  <img src={car.image4} alt={car.alt} />
                </div>
                <div className="car-det-img-item">
                  <img src={car.image5} alt={car.alt} />
                  <button
                    className="car-det-img-item-btn"
                    onClick={handleSelectImages}
                  >
                    Ver mais
                  </button>
                  {selectedImages.length > 0 && (
                    <div
                      className="gallery-modal"
                      onClick={() => setSelectedImages([])}
                    >
                      <div
                        className="gallery-content"
                        onClick={e => e.stopPropagation()}
                      >
                        <ImageGallery items={selectedImages} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="car-det-text">
            <div className="car-det-text-content">
              <h2 className="car-det-text-title">
                Alugue carro nas principaios capitais do Brasil
              </h2>
              <div className="car-det-text-text">
                <p className="car-det-text-text-paragraph">
                {car.descriptionP1}
                </p>
                <p className="car-det-text-text-paragraph">
                {car.descriptionP2}
                </p>
                <p className="car-det-text-text-paragraph">
                {car.descriptionP3}
                </p>
              </div>
              <h2 className="car-det-text-benefits">
                O que esse carro oferece?
              </h2>
              <div className="horizontal-line"></div>
              <div className="icons-colum">
                <li className="car-det-text-benefits-icons">
                  <FaUser />
                  <p className="icon-text">5 passageiros</p>
                </li>
                <li className="car-det-text-benefits-icons">
                  <FaSnowflake />
                  <p className="icon-text">Ar Condicionado</p>
                </li>
                <li className="car-det-text-benefits-icons">
                  <FaCog /> <p className="icon-text">Câmbio Manual</p>
                </li>
                <li className="car-det-text-benefits-icons">
                  <FaCarSide />
                  <p className="icon-text">4 portas</p>
                </li>
                <li className="car-det-text-benefits-icons">
                  <FaSuitcase />
                  <p className="icon-text">1 porta malas</p>
                </li>
                <li className="car-det-text-benefits-icons">
                  <BiShieldQuarter />
                  <p className="icon-text">Air Bag</p>
                </li>
              </div>
            </div>
            <div className="calendar">
              <h2 className="calendar-text-block">Datas disponíveis</h2>
                        <CustomDateRangePicker
                        open={true}
                className="custom-date-range-picker" />

              <div className="reserva-block">
                <p className="text-reserva">
                  Adicione as datas da sua viagem para obter preços exatos
                </p>
                {/* <button className="btn-reserva" onClick={handleStartReservation}>
                Iniciar reserva
              </button> */}
                <Link to="/reserva" className="btn-reserva">
                  Iniciar reserva
                </Link>
                .
              </div>
            </div>
            <div className="map">
              <h2 className="car-det-text-map">Onde você vai estar?</h2>
              <div className="horizontal-line"></div>
              <h3 className="city-map-title"><FaMapMarkerAlt /> {`${car.city} | ${car.adress}`}</h3>
              <div>
                <iframe
                  width="100%"
                  height="540"
                  style={{ border: 0, padding: '40px', borderRadius: '50px' }}
                  loading="lazy"
                  center={{ lat: -23.5489, lng: -46.6388 }}
                  zoom={13}
                  allowFullScreen
                  src= {car.map}
                ></iframe>
              </div>
            </div>
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
                  <p className="rules-text-flex-par">
                    Não fumar dentro do carro
                  </p>
                </div>
                <div className="rules-text-flex">
                  {' '}
                  <div className="rules-text-flex">
                    <h3 className="rules-text-flex-title">Saúde e segurança</h3>
                    <p className="rules-text-flex-par">
                      Diretrizes de distanciamento social e outras
                      regulamentações relacionadas ao coronavírus se aplicam
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
                      data de reserva. Após este período, será cobrada uma taxa
                      de 10% referente à indisponibilidade do automóvel para
                      outros clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
