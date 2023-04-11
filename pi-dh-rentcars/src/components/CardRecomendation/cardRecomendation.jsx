import './styleCardRecomendation.scss'
import carsList from '../CarList/carsList'
import { Card } from '../Card/card'

export function CardRecomendation({ selectedCategory }) {
  const filteredCars = selectedCategory
    ? carsList.filter(car => car.category === selectedCategory)
    : carsList

  return (
    <div className="cardrecomendation-container">
      <div className="cars-recomendation-block">
        <h2 className="title-card-recomendation">
          Recomendações: {selectedCategory}
        </h2>
        <div className="card-recomendation-group">
          <div className="cars-list-recomendation">
            {filteredCars.slice(0, 10).map(car => (
              <Card key={car.id} car={car} isDisabled={selectedCategory && car.category !== selectedCategory} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}