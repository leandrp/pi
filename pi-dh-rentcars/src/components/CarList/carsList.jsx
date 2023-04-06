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
    category: 'Grupo A - Econômico',
    city: 'São Paulo - SP',
    adress: 'Rodovia Hélio Smidt, s/n - Cumbica, Guarulhos - SP, CEP: 07190-100',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.653974611009!2d-46.49512067253564!3d-23.448666893122894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8a8fdf3ce3c3%3A0xb97e2442367a8b17!2sRod.%20H%C3%A9lio%20Smidt%20-%20Cumbica%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680740560815!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Fiat Uno 1.0 é um carro compacto que oferece economia e praticidade. Com um motor de 999 cm³ e 4 cilindros, ele produz 75 cavalos de potência e torque máximo de 9,9 kgfm. Com uma transmissão manual de 5 velocidades, o Uno 1.0 atinge uma velocidade máxima de 161 km/h e acelera de 0 a 100 km/h em 13,2 segundos. O carro possui capacidade para 5 passageiros e um porta-malas com capacidade para 290 litros.',
    descriptionP2: 'Ele também vem equipado com ar-condicionado, direção hidráulica, vidros elétricos dianteiros, travas elétricas, sistema de som com CD player e rádio AM/FM, entre outros recursos. Em termos de segurança, o Fiat Uno 1.0 vem equipado com airbags frontais, freios ABS, cintos de segurança de 3 pontos para todos os ocupantes e encostos de cabeça ajustáveis.',
    descriptionP3: 'O carro também tem uma classificação de 3 estrelas no teste de segurança do Latin NCAP. Com um consumo de combustível de 12,5 km/l na cidade e 14,2 km/l na estrada, o Fiat Uno 1.0 oferece uma boa relação custo-benefício para quem busca um carro econômico e prático para o dia a dia.',
    rating: 3,
    note: 6,
    notetext: 'Regular',
    image1: uno1,
    image2: uno2,
    image3: uno3,
    image4: uno4,
    image5: uno5,
    alt: 'Imagem Frontal Fiat Uno 1.0 na cor Branca',
  },
  {
    id: 5,
    name: 'Peugeot 208 Hatch',
    category: 'Grupo B - Conforto',
    city: 'Rio de Janeiro - RJ',
    adress: 'Av. Vinte de Janeiro, S/N - Ilha do Governador, Rio de Janeiro - RJ, CEP: 21941-570',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.679377232765!2d-43.246114084953106!3d-22.814341340314655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99798ef85b9049%3A0x1aa0a59f717077c8!2sAv.%20Vinte%20de%20Janeiro%20-%20Gale%C3%A3o%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021941-570!5e0!3m2!1spt-BR!2sbr!4v1680740877827!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Peugeot 208 Hatch é um carro compacto com design moderno e sofisticado, oferecendo um bom equilíbrio entre estilo e desempenho. Com um motor 1.6L de 118 cavalos de potência e torque máximo de 16,1 kgfm, o Peugeot 208 Hatch conta com uma transmissão automática de 6 velocidades ou manual de 5 velocidades. Ele acelera de 0 a 100 km/h em 11,6 segundos e atinge uma velocidade máxima de 190 km/h.',
    descriptionP2: 'O carro acomoda confortavelmente até 5 passageiros e possui um porta-malas com capacidade para 285 litros. Com um acabamento refinado, o Peugeot 208 Hatch vem equipado com ar-condicionado digital dual zone, direção elétrica, vidros elétricos dianteiros e traseiros, sistema de som com Bluetooth, USB e comandos no volante, entre outros recursos.',
    descriptionP3: 'Em termos de segurança, o Peugeot 208 Hatch recebeu 4 estrelas no teste de segurança do Latin NCAP, sendo equipado com airbags frontais, freios ABS, controle de estabilidade e tração, cintos de segurança de 3 pontos para todos os ocupantes e sistema ISOFIX para fixação de cadeirinhas infantis.',
    text: 'O hatch francês chega ao mercado completamente reformulado e com tecnologias inéditas no seg...',
    rating: 5,
    note: 8,
    notetext: 'Muito bom',
    image1: peugeot1,
    image2: peugeot2,
    image3: peugeot3,
    image4: peugeot4,
    image5: peugeot5,
    alt: 'Imagem Frontal Peugeot 208 Hatch na cor Azul Metalizado',
  
  },
  {
    id: 8,
    name: 'Toyota Corolla',
    category: 'Grupo C - Executivo',
    city: 'Brasília - DF',
    adress: 'Lago Sul, Brasília - DF, CEP: 71608-900',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.988947150916!2d-47.927039870698366!3d-15.869876684155411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2586f2647ec3%3A0xbe3950a72a722268!2sLago%20Sul%2C%20Bras%C3%ADlia%20-%20DF%2C%2071608-900!5e0!3m2!1spt-BR!2sbr!4v1680741125302!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Toyota Corolla é um sedã médio que oferece conforto e tecnologia em um pacote completo. Com um motor 2.0L de 177 cavalos de potência e torque máximo de 21,4 kgfm, o Corolla conta com uma transmissão automática CVT de 10 velocidades, oferecendo uma excelente performance e eficiência energética. Ele acelera de 0 a 100 km/h em 9,7 segundos e atinge uma velocidade máxima de 200 km/h.',
    descriptionP2: 'O carro acomoda confortavelmente até 5 passageiros e possui um porta-malas com capacidade para 470 litros. Com um acabamento refinado, o Toyota Corolla vem equipado com ar-condicionado digital dual zone, direção elétrica, vidros elétricos dianteiros e traseiros, sistema de som com Bluetooth, USB e comandos no volante, entre outros recursos.',
    descriptionP3: 'Em termos de segurança, o Corolla recebeu 5 estrelas no teste de segurança do Latin NCAP, sendo equipado com airbags frontais, laterais e de cortina, freios ABS, controle de estabilidade e tração, câmera de ré, cintos de segurança de 3 pontos para todos os ocupantes e sistema ISOFIX para fixação de cadeirinhas infantis.',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...',
    rating: 4,
    note: 8,
    notetext: 'Muito bom',
    image1: corolla1,
    image2: corolla2,
    image3: corolla3,
    image4: corolla4,
    image5: corolla5,
    alt: 'Imagem Frontal Toyota Corolla na cor Cinza',
  },
  {
    id: 9,
    name: 'Mitsubishi Pajero',
    category: 'Grupo D - Luxo',
    city: 'Belo Horizonte - MG',
    adress: 'Rodovia MG-10, Km 39, Confins - MG, CEP: 33500-900',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2339882526526!2d-43.4770082751769!3d-19.097388276531376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf670a1ec375f9%3A0x1656d23c8cf38fed!2sAutoPark%20BH%20Airport!5e0!3m2!1spt-BR!2sbr!4v1680741034355!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Mitsubishi Pajero é um SUV de alta performance projetado para oferecer conforto e desempenho em qualquer tipo de terreno. Com um motor V6 de 3.5 litros que produz 205 cavalos de potência e torque máximo de 30 kgfm, o Pajero oferece uma excelente dirigibilidade e capacidade off-road. Ele conta com uma transmissão automática de 5 velocidades e tração nas quatro rodas, proporcionando uma ótima performance em qualquer situação.',
    descriptionP2: 'Com capacidade para até 7 passageiros e um porta-malas com capacidade de 1.025 litros, o Pajero oferece espaço e conforto para toda a família. Ele vem equipado com ar-condicionado digital, direção hidráulica, vidros elétricos, travas elétricas, sistema de som com CD player e rádio AM/FM, entre outros recursos.',
    descriptionP3: 'Em termos de segurança, o Pajero vem equipado com airbags frontais, laterais e de cortina, freios ABS, controle de estabilidade e tração, cintos de segurança de 3 pontos para todos os ocupantes e sistema de fixação de cadeirinhas infantis ISOFIX. Além disso, o Pajero recebeu 5 estrelas no teste de segurança do Latin NCAP.',
    notetext: 'Ótimo',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...',
    rating: 5,
    note: 9,
    image1: mitsubishi1,
    image2: mitsubishi2,
    image3: mitsubishi3,
    image4: mitsubishi4,
    image5: mitsubishi5,
    alt: 'Imagem Frontal Mitsubishi Pajero na cor Prata',

  },
  {
    id: 2,
    name: 'Fiat Argo',
    category: 'Grupo A - Econômico',
    city: 'Salvador - BA',
    adress: 'Praça Gago Coutinho, S/N - São Cristóvão, Salvador - BA, CEP: 41520-970',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.899805216418!2d-38.33864418512929!3d-12.914160862157035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161635c39b0af5%3A0x991a0804fe1e586c!2sPra%C3%A7a%20Gago%20Coutinho%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Salvador%20-%20BA%2C%2041510-045!5e0!3m2!1spt-BR!2sbr!4v1680741228403!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Fiat Argo é um carro hatch compacto que oferece um ótimo conjunto de atributos para os seus usuários. Com um motor 1.0 Firefly de 3 cilindros, ele produz 77 cavalos de potência e torque máximo de 10,9 kgfm, que aliados à transmissão manual de 5 velocidades, garantem um bom desempenho ao carro. Além disso, o Argo conta com opções de motorização mais potentes, como o 1.3 Firefly e o 1.8 E.torQ, que garantem ainda mais performance ao veículo.',
    descriptionP2: 'O Fiat Argo é um carro bastante espaçoso, com capacidade para 5 passageiros e um porta-malas com capacidade para 300 litros, que é suficiente para transportar bagagens de médio porte. Ele também vem equipado com ar-condicionado, direção elétrica progressiva, vidros elétricos dianteiros e traseiros, travas elétricas, sistema de som com CD player e rádio AM/FM com Bluetooth, entre outros recursos.',
    descriptionP3: 'Em termos de segurança, o Fiat Argo vem equipado com airbags frontais e laterais, freios ABS, cintos de segurança de 3 pontos para todos os ocupantes e encostos de cabeça ajustáveis. O carro ainda conta com uma série de recursos de segurança avançados, como o controle eletrônico de estabilidade (ESC) e o controle de tração (TC), que garantem uma maior estabilidade e segurança ao dirigir.',
    text: 'O consumo do Argo Drive 1.0 é, na cidade, de surpreendentes 14,2 km/l (gasolina) e 9,9 km/l...',
    rating: 4,
    note: 7,
    notetext: 'Bom',
    image1: argo1,
    image2: argo2,
    image3: argo3,
    image4: argo4,
    image5: argo5,
    alt: 'Imagem Frontal Fiat Argo na cor Vermelha',

  },
  {
    id: 3,
    name: 'VW Voyage',
    category: 'Grupo A - Econômico',
    city: 'São Paulo - SP',
    adress: 'Rodovia Hélio Smidt, s/n - Cumbica, Guarulhos - SP, CEP: 07190-100',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.653974611009!2d-46.49512067253564!3d-23.448666893122894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8a8fdf3ce3c3%3A0xb97e2442367a8b17!2sRod.%20H%C3%A9lio%20Smidt%20-%20Cumbica%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680740560815!5m2!1spt-BR!2sbr",
    text: 'O Voyage é um carro com boas médias de consumo e oferece ótima conectividade no pacote opci...',
    rating: 3,
    note: 5,
    notetext: 'Regular',
    descriptionP1: 'O VW Voyage é um sedã compacto que oferece conforto e desempenho. Com um motor 1.6 de 4 cilindros, ele produz 110 cavalos de potência e torque máximo de 15,8 kgfm. Com uma transmissão manual de 5 velocidades ou uma automática de 6 velocidades, o Voyage atinge uma velocidade máxima de 191 km/h e acelera de 0 a 100 km/h em 10,4 segundos. O carro possui capacidade para 5 passageiros e um porta-malas com capacidade para 480 litros.',
    descriptionP2: 'Ele também vem equipado com ar-condicionado, direção hidráulica ou elétrica, vidros elétricos dianteiros e traseiros, travas elétricas, sistema de som com CD player, USB e Bluetooth, entre outros recursos. Em termos de segurança, o VW Voyage vem equipado com airbags frontais, freios ABS, cintos de segurança de 3 pontos para todos os ocupantes e encostos de cabeça ajustáveis.',
    descriptionP3: 'O carro também tem uma classificação de 5 estrelas no teste de segurança do Latin NCAP. Com um consumo de combustível de 11,6 km/l na cidade e 14,2 km/l na estrada (com gasolina), o VW Voyage oferece um bom equilíbrio entre desempenho e economia, além de ser uma opção interessante para quem busca um sedã compacto espaçoso e confortável.',
    image1: voyage1,
    image2: voyage2,
    image3: voyage3,
    image4: voyage4,
    image5: voyage5,
    alt: 'Imagem Frontal Volkswagen Voyage na cor Cinza',
  },
  {
    id: 4,
    name: 'Fiat Cronos',
    category: 'Grupo A - Econômico',
    city: 'Rio de Janeiro - RJ',
    adress: 'Av. Vinte de Janeiro, S/N - Ilha do Governador, Rio de Janeiro - RJ, CEP: 21941-570',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.679377232765!2d-43.246114084953106!3d-22.814341340314655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99798ef85b9049%3A0x1aa0a59f717077c8!2sAv.%20Vinte%20de%20Janeiro%20-%20Gale%C3%A3o%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021941-570!5e0!3m2!1spt-BR!2sbr!4v1680740877827!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Fiat Cronos é um sedan compacto que apresenta um design moderno e elegante. Com opções de motorização 1.3 e 1.8, o modelo oferece desempenho e eficiência. O motor 1.3 produz 101 cavalos de potência e torque máximo de 13,7 kgfm, enquanto o motor 1.8 gera 139 cavalos de potência e torque máximo de 19,3 kgfm.',
    descriptionP2: 'O Fiat Cronos conta com uma transmissão manual de 5 velocidades ou uma transmissão automática de 6 velocidades. Ele possui capacidade para 5 passageiros e um porta-malas com capacidade para 525 litros, um dos maiores da categoria.',
    descriptionP3: 'O modelo também é equipado com diversos itens de série, como ar-condicionado, direção elétrica, vidros elétricos dianteiros e traseiros, travas elétricas, sistema de som com USB e Bluetooth, entre outros recursos. Em termos de segurança, o Fiat Cronos vem equipado com airbags frontais, freios ABS, cintos de segurança de 3 pontos para todos os ocupantes e encostos de cabeça ajustáveis.',
    text: 'Bem equilibrado em suas formas, o Fiat Cronos na versão Drive reforça essa impressão, pois o...',
    rating: 4,
    note: 8,
    notetext: 'Bom',
    image1: cronos1,
    image2: cronos2,
    image3: cronos3,
    image4: cronos4,
    image5: cronos5,
    alt: 'Imagem Frontal Fiat Cronos na cor Prata',
  },
  {
    id: 6,
    name: 'Citroen C4',
    category: 'Grupo B - Conforto',
    city: 'Belo Horizonte - MG',
    adress: 'Rodovia MG-10, Km 39, Confins - MG, CEP: 33500-900',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2339882526526!2d-43.4770082751769!3d-19.097388276531376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf670a1ec375f9%3A0x1656d23c8cf38fed!2sAutoPark%20BH%20Airport!5e0!3m2!1spt-BR!2sbr!4v1680741034355!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Citroen C4 é um carro compacto que oferece um bom equilíbrio entre desempenho e conforto. Com um motor de 1.6L e 4 cilindros, ele produz 118 cavalos de potência e torque máximo de 16,1 kgfm. Com uma transmissão manual de 5 velocidades, o C4 atinge uma velocidade máxima de 191 km/h e acelera de 0 a 100 km/h em 10,8 segundos. O carro possui capacidade para 5 passageiros e um porta-malas com capacidade para 408 litros.',
    descriptionP2: 'Ele também vem equipado com ar-condicionado digital, direção elétrica, vidros elétricos dianteiros e traseiros, travas elétricas, sistema de som com MP3 player e rádio AM/FM, entre outros recursos. Em termos de segurança, o Citroen C4 vem equipado com airbags frontais, laterais e de cortina, freios ABS, controle de estabilidade e tração, cintos de segurança de 3 pontos para todos os ocupantes e encostos de cabeça ajustáveis.',
    descriptionP3: 'O carro também tem uma classificação de 4 estrelas no teste de segurança do Latin NCAP. Com um consumo de combustível de 10,5 km/l na cidade e 13,4 km/l na estrada, o Citroen C4 oferece um bom equilíbrio entre economia e desempenho, além de um conforto agradável para quem busca um carro compacto para uso diário.',
    text: 'Conheça O Novo Citroën C4 Cactus com Design Provocante e Melhor Performance da Categoria...',
    rating: 4,
    note: 7,
    notetext: 'Bom',
    image1: citroen1,
    image2: citroen2,
    image3: citroen3,
    image4: citroen4,
    image5: citroen5,
    alt: 'Imagem Frontal Citroen C4 na cor Branca',
  },
  {
    id: 7,
    name: 'Jeep Renegade',
    category: 'Grupo C - Executivo',
    city: 'São Paulo - SP',
    adress: 'Rodovia Hélio Smidt, s/n - Cumbica, Guarulhos - SP, CEP: 07190-100',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.653974611009!2d-46.49512067253564!3d-23.448666893122894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8a8fdf3ce3c3%3A0xb97e2442367a8b17!2sRod.%20H%C3%A9lio%20Smidt%20-%20Cumbica%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680740560815!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Jeep Renegade é um SUV compacto que oferece uma combinação de estilo off-road e conforto urbano. Com um motor 1.8L Flex de até 139 cavalos de potência, ele pode ter uma transmissão manual de 5 velocidades ou automática de 6 velocidades. O Renegade também está disponível com um motor 2.0L turbodiesel de até 170 cavalos de potência, que vem apenas com a transmissão automática.',
    descriptionP2: 'O carro possui capacidade para 5 passageiros e um porta-malas com capacidade para 320 litros, expandível para 1.281 litros com os bancos traseiros rebatidos. Ele também vem equipado com ar-condicionado, direção elétrica, vidros elétricos dianteiros e traseiros, travas elétricas, sistema de som com Bluetooth e entrada USB, entre outros recursos.',
    descriptionP3: 'Em termos de segurança, o Jeep Renegade vem equipado com airbags frontais, laterais e de cortina, freios ABS, controle de tração e estabilidade, assistente de partida em rampa e sistema Isofix para fixação de cadeirinhas infantis.',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...',
    rating: 3,
    note: 5,
    notetext: 'Regular',
    image1: jeep1,
    image2: jeep2,
    image3: jeep3,
    image4: jeep4,
    image5: jeep5,
    alt: 'Imagem Frontal Jeep Renegade na cor Bege',
  },
  {
    id: 10,
    name: 'Mercedes Benz GLA 250',
    category: 'Grupo D - Luxo',
    city: 'São Paulo - SP',
    adress: 'Rodovia Hélio Smidt, s/n - Cumbica, Guarulhos - SP, CEP: 07190-100',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.653974611009!2d-46.49512067253564!3d-23.448666893122894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8a8fdf3ce3c3%3A0xb97e2442367a8b17!2sRod.%20H%C3%A9lio%20Smidt%20-%20Cumbica%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680740560815!5m2!1spt-BR!2sbr",
    descriptionP1: 'O Mercedes-Benz GLA 250 é um SUV compacto de luxo que oferece uma combinação única de estilo, desempenho e tecnologia. Com um motor de 2.0 litros e 4 cilindros, ele produz 221 cavalos de potência e torque máximo de 350 Nm. Com uma transmissão automática de 8 velocidades e sistema de tração integral 4MATIC, o GLA 250 atinge uma velocidade máxima de 240 km/h e acelera de 0 a 100 km/h em apenas 6,6 segundos.',
    descriptionP2: 'O carro possui capacidade para 5 passageiros e um porta-malas com capacidade para 435 litros, podendo ser expandido para até 1.430 litros com os bancos traseiros rebatidos. Ele também vem equipado com uma variedade de recursos tecnológicos, como sistema de som premium, sistema de navegação, tela touchscreen de 7 polegadas, Apple CarPlay e Android Auto, entre outros.',
    descriptionP3: 'Em termos de segurança, o GLA 250 vem equipado com uma ampla gama de recursos avançados, como airbags frontais, laterais e de cortina, controle de estabilidade, sistema de alerta de colisão frontal, sistema de alerta de ponto cego e assistente de estacionamento ativo. Ele também possui uma classificação de 5 estrelas no teste de segurança do Euro NCAP.',
    text: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. mais...',
    rating: 4,
    note: 6,
    notetext: 'Bom',
    image1: mercedes1,
    image2: mercedes2,
    image3: mercedes3,
    image4: mercedes4,
    image5: mercedes5,
    alt: 'Imagem Frontal Mercedes Benz GLA 250 na cor Azul Marinho',
  }
]

export default carsList
