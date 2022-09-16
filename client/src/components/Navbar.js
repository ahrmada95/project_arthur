import '../styles/Navbar.css'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
import Cookies from 'js-cookie'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = ({setIsLoginPop, cart, setCart}) => {
   const navigate = useNavigate()
   const {globalUser, setGlobalUser} = useContext(UserContext)
   const [itemsInCart, setItemsInCart] = useState(0)
   const [searchValue, setSearchValue] = useState("")
   
   const [isShowingCart, setIsShowingCart] = useState(false)


   const removeItemFromCart = (id) => {
      let filteredCart = cart.filter(item => {
         return item.id!== id
      })
      setCart(filteredCart)
      localStorage.setItem('cart', JSON.stringify(filteredCart))
   }


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
      globalUser?.first_name? <a href='/profile'>
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
      {Cookies.get('auth-token') &&<form><button id='sign-out' onClick={()=> {navigate('/'); Cookies.remove('auth-token')}}>Sign out</button></form>}
      {
         isShowingCart&& 
         <div id='cart-pop-up' onClick={()=> {setIsShowingCart(false)}}>
         <div id='cart-container' onClick={(e)=> {e.stopPropagation()}}>
         <h1>Cart</h1>
         {cart.length == 0 ? <div id='empty-cart-container'><h2>oops... Looks like you have some shoping to do</h2><img id='empty-cart' src='../empty-card.svg'/><a href='/search/all'><button>Shop now</button></a></div> :
         cart.map(item => {
               return (
                  <div className='cart-card'>
                  <div className='cart-card-info'>
                  <p className='cart-card-name'>{item?.name}</p>
                  </div>
                  <div className='cart-card-btns'>
                  <button onClick={()=>{removeItemFromCart(item.id)}} className='cart-card-remove'><ion-icon name="trash-outline"></ion-icon></button>
                  {globalUser.first_name? <a href={`/listing/${item.id}`}><button className='cart-card-contiune'><ion-icon name="checkmark-outline"></ion-icon></button></a>:<button className='cart-card-signin'>Sign in to Contine</button>}
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