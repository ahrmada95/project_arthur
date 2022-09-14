import '../styles/Navbar.css'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
import { NavLink } from 'react-router-dom'
const Navbar = ({setIsLoginPop, cart}) => {
   const {globalUser, setGlobalUser} = useContext(UserContext)
   const [itemsInCart, setItemsInCart] = useState(0)
   const [searchValue, setSearchValue] = useState("")
   
return (
   <nav id='nav'>
   <a href='/'>
    <img  id='logo' src='../logov2.png'/>
    </a>
    <form id='navbar-search-form' action={`/search/:${searchValue}`}>
    <input type='text' id='seach-input-field' placeholder='Search anything...' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
    <button id='search-btn' ><ion-icon name="search-outline"></ion-icon></button>
    </form>
    {
      globalUser?.first_name? <a href='/buyer'>
         <button id='nav-greeting'><ion-icon name="person-circle-outline"></ion-icon></button>
         </a>:
         <button id='nav-signin-btn' onClick={()=> {setIsLoginPop(prev => !prev)}}>Sign In</button>
    }
   
    <button id='nav-cart-btn'>
      <ion-icon name="cart-outline"></ion-icon>
      {localStorage.getItem('cart')&&
      <div className='pop' id='cart-icon'>
      <p>{cart.length}</p>
      </div>}
      </button>
   </nav>
)
}
export default Navbar