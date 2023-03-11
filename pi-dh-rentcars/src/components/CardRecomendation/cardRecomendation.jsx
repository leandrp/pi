import './styleCardRecomendation.scss'
import peugeotFront from '../../assets/images/e-peugeot-front.jpeg'
import citroenFront from '../../assets/images/f-citroen-front.jpeg'
import jeepFront from '../../assets/images/g-jeep-front.jpeg'
import corollaFront from '../../assets/images/h-corolla-front.jpeg'
import mitsubishiFront from '../../assets/images/i-mitsubishi-front.jpeg'
import mercedesFront from '../../assets/images/j-mercedes-front.jpeg'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const carsListRecomendation = [
  {
    id: 5,
    name: 'Peugeot 208 Hatch',
    description: 'Grupo E - Intermediário Automático',
    image: peugeotFront,
    alt: 'Imagem Frontal Peugeot 208 Hatch na cor Azul Metalizado',
    rating: 5,
    note: 8,
    notetext: 'Muito bom',
    text: 'O hatch francês chega ao mercado completamente reformulado e com tecnologias inéditas no seg...'
  },
  {
    id: 6,
    name: 'Citroen C4',
    description: 'Grupo F - Suv Compacto Automático',
    image: citroenFront,
    alt: 'Imagem Frontal Citroen C4 na cor Branca',
    rating: 4,
    note: 7,
    notetext: 'Bom',
    text: 'Conheça O Novo Citroën C4 Cactus com Design Provocante e Melhor Performance da Categoria...'
  },
  {
    id: 7,
    name: 'Jeep Renegade',
    description: 'Grupo G - Suv Automático',
    image: jeepFront,
    alt: 'Imagem Frontal Jeep Renegade na cor Bege',
    rating: 3,
    note: 5,
    notetext: 'Regular',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  },
  {
    id: 8,
    name: 'Toyota Corolla',
    description: 'Grupo H - Executivo',
    image: corollaFront,
    alt: 'Imagem Frontal Toyota Corolla na cor Cinza',
    rating: 4,
    note: 8,
    notetext: 'Muito bom',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  },
  {
    id: 9,
    name: 'Mitsubishi Pajero',
    description: 'Grupo I - Suv Elite',
    image: mitsubishiFront,
    alt: 'Imagem Frontal Mitsubishi Pajero na cor Prata',
    rating: 5,
    note: 9,
    notetext: 'Ótimo',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  },
  {
    id: 10,
    name: 'Mercedes Benz GLA 250',
    description: 'Grupo J - Executivo Blindado',
    image: mercedesFront,
    alt: 'Imagem Frontal Mercedes Benz GLA 250 na cor Azul Marinho',
    rating: 4,
    note: 6,
    notetext: 'Bom',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  }
]

export function CardRecomendation() {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <h2 className="title-card-recomendation">Recomendações</h2>
      <div className="card-recomendation-group">
        <div className="cars-list-recomendation">
          {carsListRecomendation.map(car => (
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
                  <button>Ver mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
