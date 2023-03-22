import './styleCard.scss'
import carsList from '../CarList/carsList'

//mudar nome para productCard
export function Card() {
  return (
    <>
      <h2 className="title-card">Busque carros por grupo de conforto</h2>
      <div className="card-group">
        <ul className="cars-list">
          {carsList.slice(0, 4).map(car => (
            <li key={car.id} className="cards">
              <img className="cards-img" src={car.image} alt={car.alt} />
              <h2 className="cards-title">{car.name}</h2>
              <p className="cards-text">{car.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
