import '../styles/destinationCard.css'
export default function DestinationCard(destination) {
  return (
    <div className="card">
        <div className="card__body">
            <img src= {require("../images/" + destination.image) } className="card__img"></img>
            <h2 className="card__title">{destination.destination}</h2>
            <p className="card__description">{destination.description}</p>
            <button className="card__button">Travel Here</button>
        </div>
    </div>
  );
}