import unoFront from '../../assets/images/a-uno-front.jpeg'
import argoFront from '../../assets/images/b-argo-front.jpeg'
import voyageFront from '../../assets/images/c-voyage-front.jpeg'
import cronosFront from '../../assets/images/d-cronos-front.jpeg'
import peugeotFront from '../../assets/images/e-peugeot-front.jpeg'
import citroenFront from '../../assets/images/f-citroen-front.jpeg'
import jeepFront from '../../assets/images/g-jeep-front.jpeg'
import corollaFront from '../../assets/images/h-corolla-front.jpeg'
import mitsubishiFront from '../../assets/images/i-mitsubishi-front.jpeg'
import mercedesFront from '../../assets/images/j-mercedes-front.jpeg'

const carsList = [
  {
    id: 1,
    name: 'Fiat Uno 1.0',
    description: 'Grupo A - Econômico',
    image: unoFront,
    alt: 'Imagem Frontal Fiat Uno 1.0 na cor Branca',
    rating: 3,
    note: 6,
    notetext: 'Regular',
    text: 'Utilizando o motor 1.0 tricilíndrico presente nas versões Drive e Way, o carro faz de 0 a 10...'
  },
  {
    id: 5,
    name: 'Peugeot 208 Hatch',
    description: 'Grupo B - Conforto',
    image: peugeotFront,
    alt: 'Imagem Frontal Peugeot 208 Hatch na cor Azul Metalizado',
    rating: 5,
    note: 8,
    notetext: 'Muito bom',
    text: 'O hatch francês chega ao mercado completamente reformulado e com tecnologias inéditas no seg...'
  },
  {
    id: 8,
    name: 'Toyota Corolla',
    description: 'Grupo C - Executivo',
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
    description: 'Grupo D - Luxo',
    image: mitsubishiFront,
    alt: 'Imagem Frontal Mitsubishi Pajero na cor Prata',
    rating: 5,
    note: 9,
    notetext: 'Ótimo',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  },
  {
    id: 2,
    name: 'Fiat Argo',
    description: 'Grupo A - Econômico',
    image: argoFront,
    alt: 'Imagem Frontal Fiat Argo na cor Vermelha',
    rating: 4,
    note: 7,
    notetext: 'Bom',
    text: 'O consumo do Argo Drive 1.0 é, na cidade, de surpreendentes 14,2 km/l (gasolina) e 9,9 km/l...'
  },
  {
    id: 3,
    name: 'VW Voyage',
    description: 'Grupo A - Econômico',
    image: voyageFront,
    alt: 'Imagem Frontal Volkswagen Voyage na cor Cinza',
    rating: 3,
    note: 5,
    notetext: 'Regular',
    text: 'O Voyage é um carro com boas médias de consumo e oferece ótima conectividade no pacote opci...'
  },
  {
    id: 4,
    name: 'Fiat Cronos',
    description: 'Grupo A - Econômico',
    image: cronosFront,
    alt: 'Imagem Frontal Fiat Cronos na cor Prata',
    rating: 4,
    note: 8,
    notetext: 'Bom',
    text: 'Bem equilibrado em suas formas, o Fiat Cronos na versão Drive reforça essa impressão, pois o...'
  },
  {
    id: 6,
    name: 'Citroen C4',
    description: 'Grupo B - Conforto',
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
    description: 'Grupo C - Executivo',
    image: jeepFront,
    alt: 'Imagem Frontal Jeep Renegade na cor Bege',
    rating: 3,
    note: 5,
    notetext: 'Regular',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  },
  {
    id: 10,
    name: 'Mercedes Benz GLA 250',
    description: 'Grupo D - Luxo',
    image: mercedesFront,
    alt: 'Imagem Frontal Mercedes Benz GLA 250 na cor Azul Marinho',
    rating: 4,
    note: 6,
    notetext: 'Bom',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  }
]

export default carsList