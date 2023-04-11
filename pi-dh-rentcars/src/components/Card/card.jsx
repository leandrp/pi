import { FavoriteButton } from '../../hooks/favoriteButton'
import './styleCard.scss'
import { Link } from 'react-router-dom'

export function Card({ car, isDisabled }) {
  return (
    <div
      className={`card-recomendation ${
        isDisabled ? 'card-recomendation-disabled' : ''
      }`}
    >
      <div className="card-recomendation-image">
        <div className="card-recomendation-image-wrapper">
          <img src={car.image1} alt={car.alt} />
          <FavoriteButton car={car} />
        </div>
      </div>
      <div className="card-recomendations-wrapper">
        <div className="card-recomendation-content">
          <div className="card-recomendation-note-wrapper">{car.note}</div>
          <p className="card-recomendation-note-text-wrapper">{car.notetext}</p>
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
          <p className="card-recomendation-category">{car.category}</p>
          <p className="card-recomendation-text">
            {car.descriptionP1.slice(0, 92)}...
          </p>
          <Link to={`/carro/${car.id}`}>
            <button>Ver mais</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
