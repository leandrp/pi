import uno1 from '../../assets/images/uno1.jpeg'
import uno2 from '../../assets/images/uno2.jpeg'
import uno3 from '../../assets/images/uno3.jpeg'
import uno4 from '../../assets/images/uno4.jpeg'
import uno5 from '../../assets/images/uno5.jpeg'
import peugeot1 from '../../assets/images/peugeot1.jpeg'
import peugeot2 from '../../assets/images/peugeot2.jpeg'
import peugeot3 from '../../assets/images/peugeot3.jpeg'
import peugeot4 from '../../assets/images/peugeot4.jpeg'
import peugeot5 from '../../assets/images/peugeot5.jpeg'
import corolla1 from '../../assets/images/corolla1.jpeg'
import corolla2 from '../../assets/images/corolla2.jpeg'
import corolla3 from '../../assets/images/corolla3.jpeg'
import corolla4 from '../../assets/images/corolla4.jpeg'
import corolla5 from '../../assets/images/corolla5.jpeg'
import mitsubishi1 from '../../assets/images/mitsubishi1.jpeg'
import mitsubishi2 from '../../assets/images/mitsubishi2.jpeg'
import mitsubishi3 from '../../assets/images/mitsubishi3.jpeg'
import mitsubishi4 from '../../assets/images/mitsubishi4.jpeg'
import mitsubishi5 from '../../assets/images/mitsubishi5.jpeg'
import argo1 from '../../assets/images/argo1.jpeg'
import argo2 from '../../assets/images/argo2.jpeg'
import argo3 from '../../assets/images/argo3.jpeg'
import argo4 from '../../assets/images/argo4.jpeg'
import argo5 from '../../assets/images/argo5.jpeg'
import voyage1 from '../../assets/images/voyage1.jpeg'
import voyage2 from '../../assets/images/voyage2.jpeg'
import voyage3 from '../../assets/images/voyage3.jpeg'
import voyage4 from '../../assets/images/voyage4.jpeg'
import voyage5 from '../../assets/images/voyage5.jpeg'
import cronos1 from '../../assets/images/cronos1.jpeg'
import cronos2 from '../../assets/images/cronos2.jpeg'
import cronos3 from '../../assets/images/cronos3.jpeg'
import cronos4 from '../../assets/images/cronos4.jpeg'
import cronos5 from '../../assets/images/cronos5.jpeg'
import citroen1 from '../../assets/images/citroen1.jpeg'
import citroen2 from '../../assets/images/citroen2.jpeg'
import citroen3 from '../../assets/images/citroen3.jpeg'
import citroen4 from '../../assets/images/citroen4.jpeg'
import citroen5 from '../../assets/images/citroen5.jpeg'
import jeep1 from '../../assets/images/jeep1.jpeg'
import jeep2 from '../../assets/images/jeep2.jpeg'
import jeep3 from '../../assets/images/jeep3.jpeg'
import jeep4 from '../../assets/images/jeep4.jpeg'
import jeep5 from '../../assets/images/jeep5.jpeg'
import mercedes1 from '../../assets/images/mercedes1.jpeg'
import mercedes2 from '../../assets/images/mercedes2.jpeg'
import mercedes3 from '../../assets/images/mercedes3.jpeg'
import mercedes4 from '../../assets/images/mercedes4.jpeg'
import mercedes5 from '../../assets/images/mercedes5.jpeg'

const carsList = [
  {
    id: 1,
    name: 'Fiat Uno 1.0',
    description: 'Grupo A - Econômico',
    image: uno1,
    image2: uno2,
    image3: uno3,
    image4: uno4,
    image5: uno5,
    alt: 'Imagem Frontal Fiat Uno 1.0 na cor Branca',
    rating: 3,
    note: 6,
    notetext: 'Regular',
    text: 'O Fiat Uno 1.0 é um carro compacto que oferece economia e praticidade. Com um motor de 999 c...'
  },
  {
    id: 5,
    name: 'Peugeot 208 Hatch',
    description: 'Grupo B - Conforto',
    image: peugeot1,
    image2: peugeot2,
    image3: peugeot3,
    image4: peugeot4,
    image5: peugeot5,
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
    image: corolla1,
    image2: corolla2,
    image3: corolla3,
    image4: corolla4,
    image5: corolla5,
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
    image: mitsubishi1,
    image2: mitsubishi2,
    image3: mitsubishi3,
    image4: mitsubishi4,
    image5: mitsubishi5,
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
    image: argo1,
    image2: argo2,
    image3: argo3,
    image4: argo4,
    image5: argo5,
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
    image: voyage1,
    image2: voyage2,
    image3: voyage3,
    image4: voyage4,
    image5: voyage5,
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
    image: cronos1,
    image2: cronos2,
    image3: cronos3,
    image4: cronos4,
    image5: cronos5,
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
    image: citroen1,
    image2: citroen2,
    image3: citroen3,
    image4: citroen4,
    image5: citroen5,
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
    image: jeep1,
    image2: jeep2,
    image3: jeep3,
    image4: jeep4,
    image5: jeep5,
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
    image: mercedes1,
    image2: mercedes2,
    image3: mercedes3,
    image4: mercedes4,
    image5: mercedes5,
    alt: 'Imagem Frontal Mercedes Benz GLA 250 na cor Azul Marinho',
    rating: 4,
    note: 6,
    notetext: 'Bom',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...'
  }
]

export default carsList
