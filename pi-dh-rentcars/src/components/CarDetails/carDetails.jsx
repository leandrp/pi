import './styleCarDetails.scss'
import { useState } from 'react'
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
import { DateRangePicker } from 'rsuite'

export function CarDetails({ carId }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const car = carsList.find(car => car.id === carId)

  const { beforeToday } = DateRangePicker

  return (
    <>
      <div className="car-det-block">
        <div className="car-det-header">
          <span className="car-det-header-text-rating">CARRO </span>
          <h2 className="car-det-header-title">{car.name}</h2>
        </div>

        <div className="car-det-evaluation">
          <p className="car-det-description">
            <FaMapMarkerAlt /> {car.description}
          </p>
          <div className="car-det-rating">
            <>
              <span className="car-det-star">&#9733;&#9733;&#9733;</span>
              {Array(car.rating)
                .fill()
                .map((_, id) => (
                  <span key={id} className="car-det-star">
                    &#9733;
                  </span>
                ))}
              <div className="car-det-note">{car.note}</div>
              <p className="car-det-note-text">{car.notetext}</p>
            </>
          </div>
        </div>
        <p onClick={handleToggleFavorite}>
          {isFavorite ? (
            <AiFillHeart className="favorite" />
          ) : (
            <AiOutlineHeart className="not-favorite" />
          )}
        </p>
        <div className="car-det-img-block" key={car.id}>
          <div className="car-det-img">
            <div className="car-det-img-wrapper-1" />
            <div className="car-det-img-wrapper-2" />
            <div className="car-det-img-wrapper-3" />
            <div className="car-det-img-wrapper-4" />
            <div className="car-det-img-wrapper-5" />
          </div>
        </div>
        <span className="heart">
          <FaShareAlt /> <FaHeart />{' '}
        </span>

        <div className="car-det-text">
          <div className="car-det-text-content">
            <h2 className="car-det-text-title">
              Alugue carro nas principaios capitais do Brasil
            </h2>
            <div className="car-det-text-text">
              <p className="car-det-text-text-paragraph">
                O Fiat Uno 1.0 é um carro compacto que oferece economia e
                praticidade. Com um motor de 999 cm³ e 4 cilindros, ele produz
                75 cavalos de potência e torque máximo de 9,9 kgfm. Com uma
                transmissão manual de 5 velocidades, o Uno 1.0 atinge uma
                velocidade máxima de 161 km/h e acelera de 0 a 100 km/h em 13,2
                segundos. O carro possui capacidade para 5 passageiros e um
                porta-malas com capacidade para 290 litros.
              </p>
              <p className="car-det-text-text-paragraph">
                Ele também vem equipado com ar-condicionado, direção hidráulica,
                vidros elétricos dianteiros, travas elétricas, sistema de som
                com CD player e rádio AM/FM, entre outros recursos. Em termos de
                segurança, o Fiat Uno 1.0 vem equipado com airbags frontais,
                freios ABS, cintos de segurança de 3 pontos para todos os
                ocupantes e encostos de cabeça ajustáveis.
              </p>
              <p className="car-det-text-text-paragraph">
                O carro também tem uma classificação de 3 estrelas no teste de
                segurança do Latin NCAP. Com um consumo de combustível de 12,5
                km/l na cidade e 14,2 km/l na estrada, o Fiat Uno 1.0 oferece
                uma boa relação custo-benefício para quem busca um carro
                econômico e prático para o dia a dia.
              </p>
            </div>
            <h2 className="car-det-text-benefits">O que esse carro oferece?</h2>
            <div className="horizontal-line"></div>
            <div className="icons-colum" >
            <li className="car-det-text-benefits-icons">
              <FaUser />
              <p className="icon-text">5 passageiros</p>
            </li>
            <li className="car-det-text-benefits-icons">
              <FaSnowflake />
              <p className="icon-text">Ar Condicionado</p>
            </li>
            <li className="car-det-text-benefits-icons">
              <FaCog /> <p className="icon-text">Câmbio Manual</p>
            </li>
            <li className="car-det-text-benefits-icons">
              <FaCarSide />
              <p className="icon-text">4 portas</p>
            </li>
            <li className="car-det-text-benefits-icons">
              <FaSuitcase />
              <p className="icon-text">1 porta malas</p>
            </li></div>
          </div>
          <div className="calendar">
            <h2 className="calendar-text">Datas disponíveis</h2>
            <DateRangePicker
              disabledDate={beforeToday()}
              format="dd-MM-yyyy HH:mm"
              locale={{
                sunday: 'Dom',
                monday: 'Seg',
                tuesday: 'Ter',
                wednesday: 'Qua',
                thursday: 'Qui',
                friday: 'Sex',
                saturday: 'Sab',
                ok: 'Aplicar',
                today: 'Hoje',
                yesterday: 'Ontem',
                hours: 'Horas',
                minutes: 'Minutos'
              }}
              placeholder="Data e Hora: Retidada | Devolução"
              open={true}
              className="custom-date-range-picker"
            />
            <div className="reserva-block">
              <p className="text-reserva">
                Adicione as datas da sua viagem para obter preços exatos
              </p>
              <button className="btn-reserva">Iniciar reserva</button>
            </div>
          </div>
          <div className="map">
            <h2 className="car-det-text-map">Onde você vai estar?</h2>
            <div className="horizontal-line"></div>
            <h3 className="city-map-title">Anhangabaú, São Paulo, SP</h3>
            <div>
              <iframe
                width="100%"
                height="540"
                style={{ border: 0, padding: '40px', borderRadius: '50px' }}
                loading="lazy"
                center={{ lat: -23.5489, lng: -46.6388 }}
                zoom={13}
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=Estação+Anhangabaú+São+Paulo&zoom=16&key=AIzaSyCtSWMm6yq0vzHmatYjHjzTS7gbdk5o3YI`}
              ></iframe>
            </div>
          </div>
          <div className="rules">
            <h2 className="rules-title">O que você precisa saber:</h2>
            <div className="horizontal-line"></div>
            <div class="rules-text-columns">
              <div className="rules-text-flex">
                <h3 className="rules-text-flex-title">Regras da casa</h3>
                <p className="rules-text-flex-par">
                  Check-in a partir das 07:00h
                </p>
                <p className="rules-text-flex-par">Check-out até as 22:00h</p>
                <p className="rules-text-flex-par">Não fumar dentro do carro</p>
              </div>
              <div className="rules-text-flex">
                {' '}
                <div className="rules-text-flex">
                  <h3 className="rules-text-flex-title">Saúde e segurança</h3>
                  <p className="rules-text-flex-par">
                    Diretrizes de distanciamento social e outras regulamentações
                    relacionadas ao coronavírus se aplicam
                  </p>
                  <p className="rules-text-flex-par">
                    Carros com extintor de incêndio
                  </p>
                  <p className="rules-text-flex-par">Depósito de segurança</p>
                </div>
              </div>
              <div className="rules-text-flex">
                {' '}
                <div className="rules-text-flex">
                  <h3 className="rules-text-flex-title">
                    Política de cancelamento
                  </h3>
                  <p className="rules-text-flex-par">
                    Cancelamentos podem ser realizados até 48 horas antes da
                    data de reserva. Após este período, será cobrada uma taxa de
                    10% referente à indisponibilidade do automóvel para outros
                    clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
