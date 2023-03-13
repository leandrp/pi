import './styleCardRecomendation.scss'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import carsList from '../CarList/carsList'
import { Link } from 'react-router-dom'

export function CardRecomendation() {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <div className="cars-recomendation-block">
        <h2 className="title-card-recomendation">Recomendações</h2>
        <div className="card-recomendation-group">
          <div className="cars-list-recomendation">
            {carsList.slice(4, 10).map(car => (
              <div className="card-recomendation" key={car.id}>
                <div className="card-recomendation-image">
                  <div className="card-recomendation-image-wrapper">
                    <img src={car.image} alt={car.alt} />
                    <p onClick={handleToggleFavorite}>
                      {isFavorite ? (
                        <AiFillHeart className="favorite" />
                      ) : (
                        <AiOutlineHeart className="not-favorite" />
                      )}
                    </p>
                  </div>
                </div>
                <div className="card-recomendations-wrapper">
                  <div className="card-recomendation-content">
                    <div className="card-recomendation-note-wrapper">
                      {car.note}
                    </div>{' '}
                    <p className="card-recomendation-note-text-wrapper">
                      {car.notetext}
                    </p>{' '}
                    <div className="card-recomendation-rating">
                      <>
                        <span className="text-rating">CARRO </span>
                        {Array(car.rating)
                          .fill()
                          .map((_, id) => (
                            <span key={id} className="card-recomendation-star">
                              &#9733;
                            </span>
                          ))}
                      </>
                    </div>
                    <h2 className="card-recomendation-title">{car.name}</h2>
                    <p className="card-recomendation-description">
                      {car.description}
                    </p>
                    <p className="card-recomendation-text">{car.text}</p>
                    {/* <Link to={`/carro/${car.id}`}> */}
                    <Link to="/carro">
                      <button>Ver mais</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
