import '../styles/Navbar.css'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
import { NavLink } from 'react-router-dom'
const Navbar = ({setIsLoginPop, cart, setCart}) => {
   const {globalUser, setGlobalUser} = useContext(UserContext)
   const [isShowingCart, setIsShowingCart] = useState(false)


   const removeItemFromCart = (id) => {
      console.log(id, cart)
      let filteredCart = cart.filter(item => {
         console.log(item?.id)
         return item.id!== id
      })
      setCart(filteredCart)
      localStorage.setItem('cart', JSON.stringify(filteredCart))
      console.log(filteredCart)
   }


return (
   <nav id='nav'>
   <a href='/'>
    <img  id='logo' src='../logov2.png'/>
    </a>
    <form id='navbar-search-form'>
    <input type='text' id='seach-input-field' placeholder='Search anything...'/>
    <button id='search-btn' ><ion-icon name="search-outline"></ion-icon></button>
    </form>
    {
      globalUser?.first_name? <a href='/buyer'>
         <button id='nav-greeting'><ion-icon name="person-circle-outline"></ion-icon></button>
         </a>:
         <button id='nav-signin-btn' onClick={()=> {setIsLoginPop(prev => !prev)}}>Sign In</button>
    }
   
    <button id='nav-cart-btn' onClick={()=> { setIsShowingCart(true)}}>
      <ion-icon name="cart-outline"></ion-icon>
      {localStorage.getItem('cart')&&
      <div className='pop' id='cart-icon'>
      <p>{cart.length}</p>
      </div>}
      </button>
      {
         isShowingCart&& 
         <div id='cart-pop-up' onClick={()=> {setIsShowingCart(false)}}>
         <div id='cart-container' onClick={(e)=> {e.stopPropagation()}}>
         <h1>Cart</h1>
            {cart.map(item => {
               return (
                  <div className='cart-card'>
                  <div className='cart-card-info'>
                  <p className='cart-card-name'>{item?.name}</p>
                  </div>
                  <div className='cart-card-btns'>
                  <button onClick={()=>{removeItemFromCart(item.id)}} className='cart-card-remove'>Remove</button>
                  {globalUser.first_name?<button className='cart-card-contiune'>Continue to request</button>:<button className='cart-card-signin'>Sign in to Contine</button>}
                  </div>
               </div>
               )
            })
            
            }
           
         </div>
      </div>
      }
   </nav>
)
}
export default Navbar