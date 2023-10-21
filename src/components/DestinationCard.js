export default function DestinationCard(props) {
  return (
    <div className="card">
        <div className="card__body">
            <img src={props.img}></img>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
        </div>
        <button className="card__button">Travel Here</button>
    </div>
  );
}