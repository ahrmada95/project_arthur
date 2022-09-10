
import './styles/App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Authform from './components/AuthForm';
import Footer from './components/Footer';
function App() {
  const [isLoginPop, setIsLoginPop] = useState(true)
  return (
    <div className="App">
      <Navbar setIsLoginPop={setIsLoginPop}/>
      {isLoginPop&& <Authform setIsLoginPop={setIsLoginPop} />}
      <Home/>
      <Footer/>

    </div>
  );
}

export default App;
