import backgroundLogo from "../images/logo192.png"
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
        </main>
    );
  }