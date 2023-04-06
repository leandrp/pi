import { useState } from 'react';
import './styleProductCategory.scss';
import carsList from '../CarList/carsList';
import { Card } from '../Card/Card';

export function ProductCategory({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClickCard = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <>
      <h2 className="title-card">Busque carros por grupo</h2>
      <div className="card-group">
        <ul className="cars-list">
          {carsList.slice(0, 4).map((car) => (
            <li
              key={car.id}
              className={`cards ${selectedCategory === car.category ? 'selected' : ''}`}
              onClick={() => handleClickCard(car.category)}
            >
              <img className="cards-img" src={car.image1} alt={car.alt} />
              <h2 className="cards-title">{car.category}</h2>
              <p className="cards-text">{car.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
