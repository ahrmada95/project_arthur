import '../styles/Hero.css'
import {NavLink} from 'react-router-dom'
const Hero = () => {
return (
    <div id='hero'>
        <div id='hero-container'>
            <div id='hero-img-container'>
            <img src='./hero-bg-1.jpg' id='hero-img-1'/>
            <h2>The Quickest way to buy & sell 
                commodities</h2>
           <NavLink to='/search/all'> <button>Browse  <ion-icon name="arrow-forward-outline"></ion-icon></button></NavLink>
            </div>

            <div id='hero-img-container2'>
            <img src='./hero-bg-2.png' id='hero-img-2'/>
            <h2>Whatever you need</h2>
            <NavLink to ='/search/all'><button>Shop Now</button></NavLink>
            </div>
        </div>
    </div>
)
}

export default Hero