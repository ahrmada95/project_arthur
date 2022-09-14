import '../styles/ListingPage.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import ConfirmTransaction from './ConfirmTransaction'




const ListingPage = () => {
    let { listingId } = useParams();
    const [isConfirming, setIsConfirming] = useState(false)
    const isPurchase = true
    const [listing, setListing] = useState({})

    useEffect(()=> {
        const getListingById = async() => {
            let req = await fetch(`http://localhost:3000/listings/${listingId}`)
            let res = await req.json()
            setListing(res)
        }

        getListingById()
    }, [])
return(
    <div id="listing-page">
        <div id='listing-top-wrapper'>
        <h1>{listing?.name}</h1>
        <div id='listing-top-container'>
            <div id='listing-img-container'>
                <img src={'https://www.thebalancecareers.com/thmb/FDh8qXdM3B8zOvKiejYoz8zVrjY=/1500x1000/filters:fill(auto,1)/web-developer-job-description-salary-and-skills-2061841_final-edit-01-ac18fd4e99df46e990e4277a821faa0f.jpg'} alt={'title'}/>
            </div>
            <div id='listing-pricing-info'>
                <h2>Always Affordable: ${listing?.price}</h2>
                <ul>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>Indevidualized Invoice</li>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>24 hour support</li>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>Satisfaction Gurarantee</li>
                </ul>
                <button onClick={()=> {setIsConfirming(true)}}>Buy now</button>
            </div>
        </div>
        </div>
        <div id='listing-bottom-wrapper'>

        <h2>About this listing:</h2>
            <p>{listing?.description}</p>
            <h2>About the creator:</h2>
            <div id='listing-seller-info'>
              <div id='listing-flex-container'>
              <div id='listing-avatar-container'>
                <img src={`https://avatars.dicebear.com/api/personas/${Math.floor(Math.random())}.svg`}/>
                </div>
                <p>{listing.seller?.id}</p>
                <p id='listing-seller-rating'> {'⭐️'.repeat(listing?.seller?.rating)}{listing?.seller?.rating}</p>
              </div>
                <p>{listing?.seller?.bio}</p>
            </div>
        </div>
        {isConfirming&&< ConfirmTransaction setIsConfirming={setIsConfirming} isPurchase={isPurchase}/> }
    </div>
)
}

export default ListingPage