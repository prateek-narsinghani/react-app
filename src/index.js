import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
function NavBar() {
  const brandName = <h1>TravelBuddy</h1>
  const tabs = [
      "Pricing",
      "About",
      "Contact"
  ]
  const tabElements = tabs.map(tab => <li>{tab}</li>)
  return (
      <nav className='nav'>
          <img src="logo192.png"></img>
          {brandName}
          <ul className='nav-elements'>
            {tabElements}
          </ul>
      </nav>
  )
}

function MainContent() {
  const fruits = [
      "apple",
      "orange",
      "banana",
      "mango2"
  ]
  const fruitItems = fruits.map(fruit => <li>{fruit}</li>);
  return <ul>{fruitItems}</ul>;
}

function Footer() {
  return (
    <footer>
      <small>Copyright @prateek-narsinghani</small>
    </footer>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
  <NavBar />
  <MainContent />
  <Footer />
</div>)

