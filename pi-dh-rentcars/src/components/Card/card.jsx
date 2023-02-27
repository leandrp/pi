import "./styleCard.scss"

export function Card(props) {
  return (
    <li>
      <img src={props.cardData.image} alt={props.cardData.name} />
      <h2>{props.cardData.name}</h2>
      <p>{props.cardData.description}</p>
    </li>
  );
}
