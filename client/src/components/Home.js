import Hero from './Hero';
import HomeItemDisplay from './HomeItemDisplay';
import SuggestedProductsHome from './SuggestedProductsHome';
import SustainabilityStatement from './SustainabiltyStatement';


const Home = () => {
  window.scrollTo(0, 0);
return (
    <>
    
      <Hero/>
      <HomeItemDisplay/>
      <SuggestedProductsHome/>
      <SustainabilityStatement/>
    </>
)
}

export default Home