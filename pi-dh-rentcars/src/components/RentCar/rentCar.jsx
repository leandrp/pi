import './styleCarDetails.scss'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import carsList from '../CarList/carsList'
import { FaMapMarkerAlt, FaHeart, FaShareAlt } from 'react-icons/fa';

export function RentCar({ carId }) {
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
          <p className="car-det-description"><FaMapMarkerAlt /> {car.description}</p>
          <div className="car-det-rating">
            <>
              <span className="car-det-star">&#9733;&#9733;&#9733;</span>
              {/* {Array(car.rating)
                .fill()
                .map((_, id) => (
                  <span key={id} className="car-det-star">
                    &#9733;
                  </span>
                ))} */}
              <div className="car-det-note">{car.note}</div>
              <p className="car-det-note-text">
                {car.notetext}
              </p>
            </>
          </div>
        </div>
        <p onClick={handleToggleFavorite}>
          {isFavorite ? (
            <AiFillHeart className="favorite" /> 
          ) : (
            <AiOutlineHeart className="not-favorite" />
          )}
        </p>
        <div className="car-det-img-block" key={car.id}>
          <div className="car-det-img">
            <div className="car-det-img-wrapper-1" />
            <div className="car-det-img-wrapper-2" />
            <div className="car-det-img-wrapper-3" />
            <div className="car-det-img-wrapper-4" />
            <div className="car-det-img-wrapper-5" />
          </div>
        </div>
        <span className='heart'><FaShareAlt /> <FaHeart />  </span>

        <div className="car-det-text">
          <div className="car-det-text-content">
            <h2 className="car-det-text-title">
              Alugue carro nas principaios capitais do Brasil
            </h2>
            <p className="car-det-text-text">
              {car.text}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae repellendus enim neque odit tempore cupiditate quos
              dolor, eaque explicabo nihil iste quam. Saepe at ipsa quis!
              Voluptas pariatur suscipit officiis? Libero magnam ullam eos non
              enim quas possimus a obcaecati necessitatibus vel facilis tempora
              nihil adipisci, reprehenderit sapiente excepturi repellendus
              aperiam fuga nesciunt, nulla, fugiat ducimus quae et? Soluta,
              dolore! Tempora neque, aut est molestias dicta excepturi, fugiat
              delectus accusamus architecto sunt ex optio at commodi, debitis
              iste voluptas eaque temporibus placeat ipsa asperiores? Accusamus
              quis ipsum molestias reprehenderit corporis.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}