import '../styles/destinationCard.css'
export default function DestinationCard(props) {
  return (
    <div className="card">
        <div className="card__body">
            <img src={props.img} className="card__img"></img>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
            <button className="card__button">Travel Here</button>
        </div>
    </div>
  );
}