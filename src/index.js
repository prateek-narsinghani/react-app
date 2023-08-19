import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import NavBar from './NavBar'
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
return (
    <div id="app">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

