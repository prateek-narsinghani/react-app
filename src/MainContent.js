export default  function MainContent() {
    const fruits = [
        "Ladakh",
        "Kashmir",
        "Spiti",
        "Darjeeling"
    ]
    const fruitItems = fruits.map(fruit => <li>{fruit}</li>);
    return (
        <div id="destinations">
            <h3>Destinations</h3> 
            <ul>{fruitItems}</ul>
        </div>
    );
  }