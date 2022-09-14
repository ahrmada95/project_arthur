import '../styles/Navbar.css'
import { useContext, useState } from 'react'
import { UserContext } from '../App'
import { NavLink,  } from 'react-router-dom'
const Navbar = ({setIsLoginPop}) => {
   const {globalUser, setGlobalUser} = useContext(UserContext)
   const [searchValue, setSearchValue] = useState("")
   return (
   <nav id='nav'>
   <a href='/'>
    <img  id='logo' src='./logov2.png'/>
    </a>
    <form id='navbar-search-form' action={`/search/:${searchValue}`}>
    <input type='text' id='seach-input-field' placeholder='Search anything...' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
    <button id='search-btn' ><ion-icon name="search-outline"></ion-icon></button>
    </form>
    {
      globalUser?.first_name?<h4 id='nav-greeting'>Hi, {globalUser?.first_name}</h4>: <button id='nav-signin-btn' onClick={()=> {setIsLoginPop(prev => !prev)}}>Sign In</button>
    }
   
    <button id='nav-cart-btn' ><ion-icon name="cart-outline"></ion-icon></button>
   </nav>
)
}
export default Navbar