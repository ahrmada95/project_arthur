import '../styles/Navbar.css'

const Navbar = ({setIsLoginPop}) => {
return (
   <nav id='nav'>
    <img  id='logo' src='./logov2.png'/>
    <form id='navbar-search-form'>
    <input type='text' id='seach-input-field' placeholder='Search anything...'/>
    <button id='search-btn' ><ion-icon name="search-outline"></ion-icon></button>
    </form>
    <button id='nav-signin-btn' onClick={()=> {setIsLoginPop(prev => !prev)}}>Sign In</button>
    <button id='nav-cart-btn' ><ion-icon name="cart-outline"></ion-icon></button>
   </nav>
)
}
export default Navbar