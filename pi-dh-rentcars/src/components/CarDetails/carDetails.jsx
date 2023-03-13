import './styleCarDetails.scss'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import carsList from '../CarList/carsList'

export function CarDetails({ carId }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const car = carsList.find(car => car.id === carId)

  return (
    <>
      <div className="car-det-block">
        <div className="car-det-header">
          <span className="car-det-header-text-rating">CARRO </span>
          <h2 className="car-det-header-title">{car.name}</h2>
        </div>

        <div className="car-det-evaluation">
          <p className="car-det-description">{car.description}</p>
          <div className="car-det-rating">
            <>
              {Array(car.rating)
                .fill()
                .map((_, id) => (
                  <span key={id} className="card-recomendation-star">
                    &#9733;
                  </span>
                ))}
              <div className="card-recomendation-note-wrapper">{car.note}</div>
              <p className="card-recomendation-note-text-wrapper">
                {car.notetext}
              </p>
            </>
          </div>
        </div>

        <div className="car-det-img-block" key={car.id}>
          <p onClick={handleToggleFavorite}>
            {isFavorite ? (
              <AiFillHeart className="favorite" />
            ) : (
              <AiOutlineHeart className="not-favorite" />
            )}
          </p>
          <div className="car-det-img">
            <div className="car-det-img-wrapper">
              <img src={car.image} alt={car.alt} />
            </div>
          </div>
        </div>

        <div className="car-det-text">
          <div className="card-recomendation-content">
            <h2>Alugue carro nas principaios capitais do Brasil</h2>
            <p className="card-recomendation-text">{car.text}</p>
          </div>
        </div>
      </div>
    </>
  )
}
