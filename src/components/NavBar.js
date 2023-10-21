// we are importing images because when webpack 
// does its thing the relative path doesn't break
import reactLogo from "../images/logo192.png"


function NavBar() {
    const brandName = <h1 id="brandname">TravelBuddy</h1>
    const tabs = [
        "Pricing",
        "About",
        "Contact"
    ]
    const tabElements = tabs.map(tab => <li>{tab}</li>)
    return (
        <nav className='nav'>
            <img src={reactLogo}></img>
            {brandName}
            <ul className='nav-elements'>
              {tabElements}
            </ul>
        </nav>
    )
}

export default NavBar
