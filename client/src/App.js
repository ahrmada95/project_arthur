import './styles/App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Authform from './components/AuthForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {createContext, useState, useMemo, useEffect} from 'react'
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';
import ListingPage from './components/ListingPage';
import SearchPage from './components/SearchPage';
import SellerOnBoard from './components/SellerOnBoard';
import Cookies from 'js-cookie'

export const UserContext = createContext();


const App = () => {
  const [globalUser, setGlobalUser] = useState()
  const value = useMemo(() => ({ globalUser, setGlobalUser }), [globalUser, setGlobalUser]);
  const [isLoginPop, setIsLoginPop] = useState(false)
  const [cart, setCart] = useState([])
  useEffect(()=> {

          setCart(JSON.parse(localStorage.getItem('cart')) || []) 
          const validSesson = async() => {
              let userId = Cookies.get('auth-token')
              let req = await fetch(`http://localhost:3000/check_user`, {
                method: "POST", 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({user_id: userId})
              })
              let res = await req.json()
              setGlobalUser({first_name: res.first_name, last_name: res.last_name, email: res.email})
          }
          validSesson()
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={value}>
      {isLoginPop&& <Authform setIsLoginPop={setIsLoginPop} />}
      <Router>
      <Navbar setIsLoginPop={setIsLoginPop} cart={cart} setCart={setCart}/>
        <Routes>
        <Route exact key={1} path ='/' element={<Home/>}/>
        <Route exact key={2}  path='/dashboard' element={<SellerPage/>}/>
        <Route exact key={3}  path='/profile' element={<BuyerPage/>}/>
        <Route exact key={4}  path='/listing/:listingId' element={<ListingPage setCartItems={setCart}/>}/>
        <Route exact key={5}  path='/search/:searchValue' element={<SearchPage/>}/>
        <Route exact key={6}  path='/become-a-seller' element={<SellerOnBoard/>}/>
        </Routes>
      </Router>
      <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
