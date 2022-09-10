
import './styles/App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import HomeItemDisplay from './components/HomeItemDisplay';
import SuggestedProductsHome from './components/SuggestedProductsHome';
import SustainabilityStatement from './components/SustainabiltyStatement';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HomeItemDisplay/>
      <SuggestedProductsHome/>
      <SustainabilityStatement/>
      <Footer/>
    </div>
  );
}

export default App;
