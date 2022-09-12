import '../styles/ListingPage.css'

const ListingPage = () => {
return(
    <div id="listing-page">
        <div id='listing-top-wrapper'>
        <h1>{'Title'}</h1>
        <div id='listing-top-container'>
            <div id='listing-img-container'>
                <img src={'./example-web.webp'} alt={'title'}/>
            </div>
            <div id='listing-pricing-info'>
                <h2>Always Affordable: {'$100'}</h2>
                <ul>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>Indevidualized Invoice</li>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>24 hour support</li>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>Satisfaction Gurarantee</li>
                </ul>
                <button>Buy now</button>
            </div>
        </div>
        </div>
        <div id='listing-bottom-wrapper'>

        <h2>About this listing:</h2>
            <p>{'This is a description of the services being offered by the creator.  I am sure they will all very talented at doing things.  lots of things. all the things'}</p>
            <h2>About the creator:</h2>
            <div id='listing-seller-info'>
              <div id='listing-flex-container'>
              <div id='listing-avatar-container'>
                <img src={`https://avatars.dicebear.com/api/personas/${Math.floor(Math.random())}.svg`}/>
                </div>
                <p>{'Anya Sirman'}</p>
                <p id='listing-seller-rating'> {'⭐️'.repeat(4.78)}{' 4.78'}</p>
              </div>
                <p>{'I am a web developer that would love to work with you on your next project.  I have over 150 years of expirence working in the web industry and know that we could make something great together.'}</p>
            </div>
        </div>

    </div>
)
}

export default ListingPage