import './styleCard.scss'
import unoFront from '../../assets/images/a-uno-front.jpeg'
import argoFront from '../../assets/images/b-argo-front.jpeg'
import voyageFront from '../../assets/images/c-voyage-front.jpeg'
import cronosFront from '../../assets/images/d-cronos-front.jpeg'

const carsList = [
  {
    id: 1,
    name: 'Fiat Uno 1.0',
    description: 'Grupo A - Compacto e Econômico',
    image: unoFront,
    alt: 'Imagem Frontal Fiat Uno 1.0 na cor Branca'
  },
  {
    id: 2,
    name: 'Fiat Argo',
    description: 'Grupo B - Econômico Especial Com Ar',
    image: argoFront,
    alt: 'Imagem Frontal Fiat Argo na cor Vermelha'
  },
  {
    id: 3,
    name: 'VW Voyage',
    description: 'Grupo C - Econômico Sedan Com Ar',
    image: voyageFront,
    alt: 'Imagem Frontal Volkswagen Voyage na cor Cinza'
  },
  {
    id: 4,
    name: 'Fiat Cronos',
    description: 'Grupo D - Intermediário Sedan',
    image: cronosFront,
    alt: 'Imagem Frontal Fiat Cronos na cor Prata'
  }
]
//mudar nome para productCard
export function Card() {
  return (
    <>
      <h2 className="title-card">Busque carros por grupo de conforto</h2>
      <div className="card-group">
        <ul className="cars-list">
          {carsList.map(car => (
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
