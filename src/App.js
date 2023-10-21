import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import DestinationCard from "./components/DestinationCard";

export default function App() {
    return (
        <div id="app">
          <NavBar />
          <MainContent />
          <DestinationCard />
          <Footer />
        </div>
      );
    }