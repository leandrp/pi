import './styleproductCreateForm.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import carsList from '../CarList/carsList'
import {
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaUser,
  FaSnowflake,
  FaCog,
  FaCarSide,
  FaSuitcase
} from 'react-icons/fa'
import { BiShieldQuarter } from 'react-icons/bi'
import { DateRangePicker } from 'rsuite'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { CityList } from '../City/cityList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Accept from '../Dropzone/dropzone'

export function ProductCreateForm() {
  const [formData, setFormData] = useState({
    // id: '',
    name: '',
    category: '',
    adress: '',
    city: '',
    descriptionP1: '',
    descriptionP2: '',
    descriptionP3: '',
    passengersNumber: '',
    airConditioning: '',
    exchange: '',
    doorsNumber: '',
    luggage: '',
    airBag: '',
    rating: '',
    note: '',
    notetext: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    alt: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  // const handleFormChange = e => {
  //   const { name, value } = e.target
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }))
  // }

  const [charsLeftP1, setCharsLeftP1] = useState(500)
  const [charsLeftP2, setCharsLeftP2] = useState(500)
  const [charsLeftP3, setCharsLeftP3] = useState(500)

  const handleTextAreaChange1 = event => {
    const { name, value } = event.target
    const inputLength = value.length
    if (inputLength <= 500) {
      setFormData(prevData => ({ ...prevData, [name]: value }))
      setCharsLeftP1(500 - inputLength)
    }
  }

  const handleTextAreaChange2 = event => {
    const { name, value } = event.target
    const inputLength = value.length
    if (inputLength <= 500) {
      setFormData(prevData => ({ ...prevData, [name]: value }))
      setCharsLeftP2(500 - inputLength)
    }
  }

  const handleTextAreaChange3 = event => {
    const { name, value } = event.target
    const inputLength = value.length
    if (inputLength <= 500) {
      setFormData(prevData => ({ ...prevData, [name]: value }))
      setCharsLeftP3(500 - inputLength)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Armazena os dados do formulário no localStorage
    localStorage.setItem('formData', JSON.stringify(formData))
  }

  const handleGoBack = () => {
    window.history.back()
  }

  const notas = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="adm-det-block">
      <div className="adm-det-block-header">
        <div className="adm-det-block-header-container">
          <h2 className="adm-det-block-header-container-title">
            Administração
          </h2>
          <button
            className="adm-det-block-header-container-btn-back"
            onClick={handleGoBack}
          >
            <IoIosArrowBack />
          </button>
        </div>
      </div>

      <div className="adm-det-block-container">
        <h2 className="adm-det-block-container-title">Cadastrar carro</h2>
        <form
          className="adm-det-block-container-product-form"
          onSubmit={handleSubmit}
        >
          <div className="adm-det-block-container-descripton">
            <div className="form-row-adm">
              <label className="label">
                Nome do carro:
                <div>
                  <input
                    className="input-carro"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </label>
              <label className="label">
                Categoria:
                <div>
                  <select
                    className="input-categoria"
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="Grupo A - Econômico">
                      Grupo A - Econômico
                    </option>
                    <option value="Grupo B - Conforto">
                      Grupo B - Conforto
                    </option>
                    <option value="Grupo C - Executivo">
                      Grupo C - Executivo
                    </option>
                    <option value="Grupo D - Luxo">Grupo D - Luxo</option>
                  </select>
                </div>
              </label>
            </div>

            <div className="form-row-adm">
              <label className="label">
                Endereço:
                <div>
                  <input
                    className="input-adress"
                    type="text"
                    name="adress"
                    value={formData.adress}
                    onChange={handleChange}
                  />
                </div>
              </label>
              <label className="label">
                Cidade:
                <div>
                  <select
                    className="input-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="São Paulo - SP">São Paulo - SP</option>
                    <option value="Rio de Janeiro - RJ">
                      Rio de Janeiro - RJ
                    </option>
                    <option value="Brasília - DF">Brasília - DF</option>
                    <option value="Belo Horizonte - MG">
                      Belo Horizonte - MG
                    </option>
                    <option value="Salvador - BA">Salvador - BA</option>
                  </select>
                </div>
              </label>
            </div>

            <label className="label">
              Descrição paragrafo 1:{' '}
              <Popup
                className="my-popup"
                trigger={
                  <FontAwesomeIcon icon={faInfoCircle} className="popup-info" />
                }
                modal
              >
                <div className="popup-block">
                  <p className="popup-title">
                    Instruções para preencher o campo "Descrição Parágrafo 1"
                  </p>
                  <p className="popup-text">
                    Neste campo, você deve inserir as informações:
                  </p>
                  <ul className="popup-text">
                    <li>
                      Descreva as principais características do carro, como
                      modelo, marca, ano, entre outras;
                    </li>
                    <li>
                      Informe sobre a potência do motor e sua velocidade máxima;
                    </li>
                    <li>
                      Indique quantos passageiros o carro comporta e a
                      capacidade do porta-malas.
                    </li>
                  </ul>
                  <p className="popup-title-exemple">Exemplo:</p>
                  <p className="popup-text-exemple">
                    "O Fiat Uno 1.0 é um carro compacto que oferece economia e
                    praticidade. Com um motor de 999 cm³ e 4 cilindros, ele
                    produz 75 cavalos de potência e torque máximo de 9,9 kgfm.
                    Com uma transmissão manual de 5 velocidades, o Uno 1.0
                    atinge uma velocidade máxima de 161 km/h e acelera de 0 a
                    100 km/h em 13,2 segundos. O carro possui capacidade para 5
                    passageiros e um porta-malas com capacidade para 290
                    litros."
                  </p>
                  <p>Atenção: O campo permite um máximo de 500 caracteres.</p>
                </div>
              </Popup>
              <div>
                <div className="info-icon"></div>
                <textarea
                  maxLength="500"
                  className="input-description"
                  name="descriptionP1"
                  value={formData.descriptionP1}
                  onChange={handleTextAreaChange1}
                />
              </div>
              <div className="caracters-left">
                Caracteres restantes: {charsLeftP1}
              </div>
            </label>

            <label className="label">
              Descrição paragrafo 2:{' '}
              <Popup
                className="my-popup"
                trigger={
                  <FontAwesomeIcon icon={faInfoCircle} className="popup-info" />
                }
                modal
              >
                <div className="popup-block">
                  <p className="popup-title">
                    Instruções para preencher o campo "Descrição Parágrafo 2"
                  </p>
                  <p className="popup-text">
                    Neste campo, você deve inserir as informações:
                  </p>
                  <ul className="popup-text">
                    <li>
                      Liste os recursos do carro: ar-condicionado, direção
                      hidráulica, vidros elétricos dianteiros, travas elétricas,
                      sistema de som com CD player e rádio AM/FM, entre outros;
                    </li>
                    <li>
                      Descreva cada recurso brevemente, incluindo como eles
                      podem ser úteis para o motorista e os passageiros;
                    </li>
                    <li>
                      Fale sobre a segurança do carro e seus recursos de
                      segurança, como airbags frontais, freios ABS, cintos de
                      segurança de 3 pontos para todos os ocupantes e encostos
                      de cabeça ajustáveis.
                    </li>
                  </ul>
                  <p className="popup-title-exemple">Exemplo:</p>
                  <p className="popup-text-exemple">
                    "Ele também vem equipado com ar-condicionado, direção
                    hidráulica, vidros elétricos dianteiros, travas elétricas,
                    sistema de som com CD player e rádio AM/FM, entre outros
                    recursos. Em termos de segurança, o Fiat Uno 1.0 vem
                    equipado com airbags frontais, freios ABS, cintos de
                    segurança de 3 pontos para todos os ocupantes e encostos de
                    cabeça ajustáveis."
                  </p>
                  <p>Atenção: O campo permite um máximo de 500 caracteres.</p>
                </div>
              </Popup>
              <div>
                <div className="info-icon"></div>
                <textarea
                  maxLength="500"
                  className="input-description"
                  name="descriptionP2"
                  value={formData.descriptionP2}
                  onChange={handleTextAreaChange2}
                />
              </div>
              <div className="caracters-left">
                Caracteres restantes: {charsLeftP2}
              </div>
            </label>

            <label className="label">
              Descrição paragrafo 3:{' '}
              <Popup
                className="my-popup"
                trigger={
                  <FontAwesomeIcon icon={faInfoCircle} className="popup-info" />
                }
                modal
              >
                <div className="popup-block">
                  <p className="popup-title">
                    Instruções para preencher o campo "Descrição Parágrafo 3"
                  </p>
                  <p className="popup-text">
                    Neste campo, você deve inserir as informações:
                  </p>
                  <ul className="popup-text">
                    <li>
                      Comece informando a classificação de segurança do carro,
                      como avaliação no teste do Latin NCAP;
                    </li>
                    <li>
                      Em seguida, forneça informações sobre o consumo de
                      combustível na cidade e estrada;
                    </li>
                    <li>Finalize destacando que a relação custo-benefício.</li>
                  </ul>
                  <p className="popup-title-exemple">Exemplo:</p>
                  <p className="popup-text-exemple">
                    "O carro também tem uma classificação de 3 estrelas no teste
                    de segurança do Latin NCAP. Com um consumo de combustível de
                    12,5 km/l na cidade e 14,2 km/l na estrada, o Fiat Uno 1.0
                    oferece uma boa relação custo-benefício para quem busca um
                    carro econômico e prático para o dia a dia."
                  </p>
                  <p>Atenção: O campo permite um máximo de 500 caracteres.</p>
                </div>
              </Popup>
              <div>
                <div className="info-icon"></div>
                <textarea
                  className="input-description"
                  name="descriptionP3"
                  value={formData.descriptionP3}
                  onChange={handleTextAreaChange3}
                />
              </div>
              <div className="caracters-left">
                Caracteres restantes: {charsLeftP3}
              </div>
            </label>
          </div>

          <div className="adm-det-block-container-atributes">
            <h2 className="car-atributes">Atributos</h2>

            <div className="form-row-adm">
              <label className="label">
                <div className="icons-atributes">
                  <FaUser />{' '}
                  <p className="icons-atributes-text">Número de passageiros</p>
                </div>
                <div>
                  <select
                    className="input-passengers-number"
                    type="text"
                    name="passengersNumber"
                    value={formData.passengersNumber}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="2 passageiros">2 passageiros</option>
                    <option value="3 passageiros">3 passageiros</option>
                    <option value="4 passageiros">4 passageiro</option>
                    <option value="5 passageiros">5 passageiros</option>
                    <option value="6 passageiros">6 passageiros</option>
                    <option value="7 passageiros">7 passageiros</option>
                  </select>
                </div>
              </label>
              <label className="label">
                <div className="icons-atributes">
                  <FaSnowflake />{' '}
                  <p className="icons-atributes-text">Ar condicionado</p>
                </div>
                <div>
                  <select
                    className="input-passengers-number"
                    type="text"
                    name="airConditioning"
                    value={formData.airConditioning}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="Ar Condicionado">Com Ar Condicionado</option>
                    <option value="Sem Ar Condicionado">
                      Sem Ar Condicionado
                    </option>
                  </select>
                </div>
              </label>
              <label className="label">
                <div className="icons-atributes">
                  <FaCog />{' '}
                  <p className="icons-atributes-text">Tipo de Câmbio</p>
                </div>
                <div>
                  <select
                    className="input-passengers-number"
                    type="text"
                    name="exchange"
                    value={formData.exchange}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="Câmbio Manual">Câmbio Manual</option>
                    <option value="Câmbio Automático">Câmbio Automático</option>
                    <option value="Câmbio CVT">Câmbio CVT</option>
                  </select>
                </div>
              </label>
            </div>

            <div className="form-row-adm">
              <label className="label">
                <div className="icons-atributes">
                  <FaCarSide />{' '}
                  <p className="icons-atributes-text">Número de portas</p>
                </div>
                <div>
                  <select
                    className="input-passengers-number"
                    type="text"
                    name="doorsNumber"
                    value={formData.doorsNumber}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="2 portas">2 portas</option>
                    <option value="3 portas">3 portas</option>
                    <option value="4 portas">4 portas</option>
                  </select>
                </div>
              </label>
              <label className="label">
                <div className="icons-atributes">
                  <FaSuitcase />{' '}
                  <p className="icons-atributes-text">Porta Malas</p>
                </div>
                <div>
                  <select
                    className="input-passengers-number"
                    type="text"
                    name="luggage"
                    value={formData.luggage}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="Porta Malas">Com Porta Malas</option>
                    <option value="Sem Porta Malas">Sem Porta Malas</option>
                  </select>
                </div>
              </label>
              <label className="label">
                <div className="icons-atributes">
                  <FaCog /> <p className="icons-atributes-text">Air Bag</p>
                </div>
                <div>
                  <select
                    className="input-passengers-number"
                    type="text"
                    name="airBag"
                    value={formData.airBag}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="Air Bag">Com Air Bag</option>
                    <option value="Sem Air Bag">Sem Air Bag</option>
                  </select>
                </div>
              </label>
            </div>
          </div>

          <div className="adm-det-block-container-avaliation">
            <h2 className="car-avaliation">Avaliação</h2>
            <div className="form-row-adm">
              <label className="label">
                Número de estrelas:
                <div>
                  <select
                    className="input-star"
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option className="star" value="1">
                      ★☆☆☆☆
                    </option>
                    <option className="star" value="2">
                      ★★☆☆☆
                    </option>
                    <option className="star" value="3">
                      ★★★☆☆
                    </option>
                    <option className="star" value="4">
                      ★★★★☆
                    </option>
                    <option className="star" value="5">
                      ★★★★★
                    </option>
                  </select>
                </div>
              </label>

              <label className="label">
                Avaliação:
                <div>
                  <select
                    className="input-notetext"
                    type="text"
                    name="notetext"
                    value={formData.notetext}
                    onChange={handleChange}
                  >
                    <option value="">--Selecione--</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Regular">Regular</option>
                    <option value="Bom">Bom</option>
                    <option value="Muito bom">Muito bom</option>
                    <option value="Ótimo">Ótimo</option>
                  </select>
                </div>
              </label>
            </div>

            <div className="label-nota-space">
              <label className="label-nota-geral">
                {' '}
                Nota:
                <div className="div-label-nota">
                  {notas.map(nota => (
                    <label
                      key={nota}
                      className="label-nota"
                      type="text"
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                    >
                      <input
                        className="input-nota"
                        type="radio"
                        name="nota"
                        value={nota}
                      />{' '}
                      {nota}
                    </label>
                  ))}
                </div>
              </label>
            </div>
          </div>

          <div className="adm-det-block-container-images">
            <h2 className="car-images">Imagens</h2>
            <div className="label-nota-space">
              <label className="label">
                Descrição da imagem:
                <div>
                  <input
                    className="input-alt"
                    type="text"
                    name="alt"
                    value={formData.alt}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="form-row-adm">
              <div className="label">
                Imagem 1:
                <Accept
                  type="text"
                  name="image1"
                  value={formData.image1}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                Imagem 2:
                <Accept
                  type="text"
                  name="image2"
                  value={formData.image2}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                Imagem 3:
                <Accept
                  type="text"
                  name="image3"
                  value={formData.image3}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                Imagem 4:
                <Accept
                  type="text"
                  name="image1"
                  value={formData.image4}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                Imagem 5:
                <Accept
                  type="text"
                  name="image1"
                  value={formData.image5}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Criar
          </button>
        </form>
      </div>
    </div>
  )
}

{
  /* <label className="label">
Imagem 1:
<div>
  <input
    className="input-imagem"
    type="text"
    name="image1"
    value={formData.image1}
    onChange={handleChange}
  />
</div>
</label>
<label className="label">
Imagem 2:
<div>
  <input
    className="input-imagem"
    type="text"
    name="image2"
    value={formData.image2}
    onChange={handleChange}
  />
</div>
</label>
<label className="label">
Imagem 3:
<div>
  <input
    className="input-imagem"
    type="text"
    name="image3"
    value={formData.image3}
    onChange={handleChange}
  />
</div>
</label>
<label className="label">
Imagem 4:
<div>
  <input
    className="input-imagem"
    type="text"
    name="image4"
    value={formData.image4}
    onChange={handleChange}
  />
</div>
</label>
<label className="label">
Imagem 5:
<div>
  <input
    className="input-imagem"
    type="text"
    name="image5"
    value={formData.image5}
    onChange={handleChange}
  />
</div>
</label> */
}
