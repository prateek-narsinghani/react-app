import backgroundLogo from "../images/logo192.png"
import kashmir from "../images/kashmir.jpg"
import DestinationCard from "./DestinationCard";
export default  function MainContent() {
    const destinations = [
        "Ladakh",
        "Kashmir",
        "Spiti",
        "Darjeeling"
    ]
    const destinationList = destinations.map(destination => <li>{destination}</li>);
    return (
        <main id="destinations">
            <h3>Destinations</h3> 
            <ul>{destinationList}</ul>
            <DestinationCard 
                img={kashmir}
                title="Kashmir"
                description="Heaven on Earth"/>
        </main>
    );
  }