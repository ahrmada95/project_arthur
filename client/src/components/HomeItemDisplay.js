import '../styles/HomeItemDisplay.css'
const HomeItemDisplay =() => {
return (
    <div id='item-display'>
        <h1>Collections</h1>
    <div id='item-display-container'>
        <div className='display-item'>
            <div className='display-circle'>
                <img src='./magaphone-man.png'/>
            </div>
            <p>Digital Marketing</p>
        </div>
        <div className='display-item'>
            <div className='display-circle'>
            <img id='kb' src='./kb-removebg.png'/>
            </div>
            <p>Keyboards</p>
        </div>
        <div className='display-item'>
            <div className='display-circle'>
            <img id='kb' src='./web.png'/>
            </div>
            <p>Websites & Tech </p>
        </div>
        <div className='display-item'>
            <div className='display-circle'>
            <img id='char' src='./char.jpg'/>
            </div>
            <p>Collectibles</p>
        </div>
    </div>
    </div>
)
}

export default HomeItemDisplay