import "./styleHome.scss"
import unoFront from "../../assets/images/a-uno-front.jpeg"
import argoFront from "../../assets/images/b-argo-front.jpeg"
import voyageFront from "../../assets/images/c-voyage-front.jpeg"
import cronosFront from "../../assets/images/d-cronos-front.jpeg"
import peugeotFront from "../../assets/images/e-peugeot-front.jpeg"
import citroenFront from "../../assets/images/f-citroen-front.jpeg"
import jeepFront from "../../assets/images/g-jeep-front.jpeg"
import corollaFront from "../../assets/images/h-corolla-front.jpeg"
import mitsubishiFront from "../../assets/images/i-mitsubishi-front.jpeg"
import mercedesFront from "../../assets/images/j-mercedes-front.jpeg"
import { Card } from "../../components/Card/card"

const carsListFinded = [
  {
    id: 1,
    name: "Fiat Uno 1.0",
    description: "Grupo A - Compacto e Econômico",
    image: unoFront,
    alt: "Imagem Frontal Fiat Uno 1.0 na cor Branca"
  },
  {
    id: 2,
    name: "Fiat Argo",
    description: "Grupo B - Econômico Especial Com Ar",
    image: argoFront,
    alt: "Imagem Frontal Fiat Argo na cor Vermelha"
  },
  {
    id: 3,
    name: "VW Voyage",
    description: "Grupo C - Econômico Sedan Com Ar",
    image: voyageFront,
    alt: "Imagem Frontal Volkswagen Voyage na cor Cinza"
  },
  {
    id: 4,
    name: "Fiat Cronos",
    description: "Grupo D - Intermediário Sedan",
    image: cronosFront,
    alt: "Imagem Frontal Fiat Cronos na cor Prata"
  },
  {
    id: 5,
    name: "Peugeot 208 Hatch",
    description: "Grupo E - Intermediário Automático",
    image: peugeotFront,
    alt: "Imagem Frontal Peugeot 208 Hatch na cor Azul Metalizado"
  },
  {
    id: 6,
    name: "Citroen C4",
    description: "Grupo F - Suv Compacto Automático",
    image: citroenFront,
    alt: "Imagem Frontal Citroen C4 na cor Branca"
  },
  {
    id: 7,
    name: "Jeep Renegade",
    description: "Grupo G - Suv Automático",
    image: jeepFront,
    alt: "Imagem Frontal Jeep Renegade na cor Bege"
  },
  {
    id: 8,
    name: "Toyota Corolla",
    description: "Grupo H - Executivo",
    image: corollaFront,
    alt: "Imagem Frontal Toyota Corolla na cor Cinza"
  },
  {
    id: 9,
    name: "Mitsubishi Pajero",
    description: "Grupo I - Suv Elite",
    image: mitsubishiFront,
    alt: "Imagem Frontal Mitsubishi Pajero na cor Prata"
  },
  {
    id: 10,
    name: "Mercedes Benz GLA 250",
    description: "Grupo J - Executivo Blindado",
    image: mercedesFront,
    alt: "Imagem Frontal Mercedes Benz GLA 250 na cor Azul Marinho"
  }
]



export function Home() {

  return (
    <div className="cars-card">
      <h1 className="main-title">Busca ofertas em aluguel de carros e muito mais</h1>
      <h2 className="secondary-title">Encontre seu carro grupo de </h2>
      <ul className="cars-list-finded">
        {carsListFinded.map(component => {
          return (
            <Card 
              key={component.id}
              cardData={component}
            />
          )
        })}
      </ul>
    </div>
  )
}
