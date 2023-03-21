import './styleProductCategory.scss'
import carsList from '../CarList/carsList';

export function ProductCategory() {
  return (
    <>
      <h2 className="title-card">Busque carros por grupo</h2>
      <div className="card-group">
        <ul className="cars-list">
          {carsList.slice(0, 4).map(car => (
            <li key={car.id} className="cards">
              <img className="cards-img" src={car.image} alt={car.alt} />
              <h2 className="cards-title">{car.description}</h2>
              <p className="cards-text">{car.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
