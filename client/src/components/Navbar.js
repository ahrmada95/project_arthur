import '../styles/Navbar.css'
import { useContext, useState } from 'react'
import { UserContext } from '../App'
const Navbar = ({setIsLoginPop}) => {
   const {globalUser, setGlobalUser} = useContext(UserContext)
return (
   <nav id='nav'>
    <img  id='logo' src='./logov2.png'/>
    <form id='navbar-search-form'>
    <input type='text' id='seach-input-field' placeholder='Search anything...'/>
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