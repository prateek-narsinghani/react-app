import DestinationCard from "./DestinationCard";
import destinations from "../data/destinations.json"
import '../styles/mainContent.css'

export default function MainContent() {
    const card = destinations.map(destination => (
        <DestinationCard
            img={ require('../images/' + destination.image)}
            title={destination.destination}
            description={destination.description}
        />
    ))
    return (
        <main id="destinations">
            <h3>Destinations</h3>
            <div className="destinationCardWrapper">
                {card}
            </div>
        </main>
    );
}