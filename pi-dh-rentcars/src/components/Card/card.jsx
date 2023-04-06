import './styleCard.scss';
import carsList from '../CarList/carsList';

export function Card({ selectedCategory, category }) {
  const filteredCars = selectedCategory
    ? carsList.filter((car) => car.category === selectedCategory)
    : carsList;

  return (
    <div className="card-container">
      <h2 className="title-card">{selectedCategory ? `Categoria selecionada: ${selectedCategory}` : 'Categoria não selecionada'}</h2>
      <div className="card-group">
        <ul className="cars-list">
          {filteredCars.slice(0, 4).map((car) => (
            <li key={car.id} className={`cards ${car.category === category ? 'selected' : ''}`}>
              <img className="cards-img" src={car.image1} alt={car.alt} />
              <h2 className="cards-title">{car.name}</h2>
              <p className="cards-text">{car.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
