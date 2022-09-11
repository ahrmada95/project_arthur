import './styles/App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Authform from './components/AuthForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {createContext, useState, useMemo} from 'react'
import SellerPage from './components/SellerPage';
export const UserContext = createContext();


const App = () => {
  const [globalUser, setGlobalUser] = useState()
  const value = useMemo(() => ({ globalUser, setGlobalUser }), [globalUser, setGlobalUser]);
  const [isLoginPop, setIsLoginPop] = useState(false)
  return (
    <div className="App">
      <UserContext.Provider value={value}>
      <Navbar setIsLoginPop={setIsLoginPop}/>
      {isLoginPop&& <Authform setIsLoginPop={setIsLoginPop} />}
      <Router>
        <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/profile/seller' element={<SellerPage/>}/>
        </Routes>
      </Router>
      <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
