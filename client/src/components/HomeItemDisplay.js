import '../styles/HomeItemDisplay.css'
import {NavLink} from 'react-router-dom'
const HomeItemDisplay =() => {
return (
    <div id='item-display'>
        <h1>Collections</h1>
    <div id='item-display-container'>
        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/search/design'>
        <div className='display-item'>
            <div className='display-circle'>
                <img src='./magaphone-man.png'/>
            </div>
            <p>Digital Marketing</p>
        </div>
        </NavLink>
        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/search/all'>
        <div className='display-item'>
            <div className='display-circle'>
            <img id='kb' src='./kb-removebg.png'/>
            </div>
            <p>Keyboards</p>
        </div>
        </NavLink>
        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/search/all'>
        <div className='display-item'>
            <div className='display-circle'>
            <img id='kb' src='./web.png'/>
            </div>
            <p>Websites & Tech </p>
        </div>
        </NavLink>
        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/search/all'>
        <div className='display-item'>
            <div className='display-circle'>
            <img id='char' src='./char.jpg'/>
            </div>
            <p>Collectibles</p>
        </div>
        </NavLink>
    </div>
    </div>
)
}

export default HomeItemDisplay