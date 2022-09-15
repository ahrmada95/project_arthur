import '../styles/ListingPage.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import ConfirmTransaction from './ConfirmTransaction'




const ListingPage = ({setCartItems}) => {
    let { listingId } = useParams();
    const [isConfirming, setIsConfirming] = useState(false)
    const isPurchase = true
    const [listing, setListing] = useState({})
    const [seller, setSeller] = useState({})

    useEffect(()=> {
        const getListingById = async() => {
            let req = await fetch(`http://localhost:3000/listings/${listingId}`)
            let res = await req.json()
            setListing(res.listing)
            setSeller(res)
        }

        getListingById()
    }, [])
    const handleAddToCart =() => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart == null){
            setCartItems([listing])
            localStorage.setItem('cart', JSON.stringify([listing]))
        }else if (!cart.some(item => item.name === listing.name)){
            cart.push(listing)
            setCartItems(prev => [...prev, listing])
            localStorage.setItem('cart', JSON.stringify(cart))
        }else {
        }
    }

    return(
    <div id="listing-page">
        <div id='listing-top-wrapper'>
        <h1>{listing?.name}</h1>
        <div id='listing-top-container'>
            <div id='listing-img-container'>
                <img src={listing?.images} alt={'title'}/>
            </div>
            <div id='listing-pricing-info'>
                <h2>Always Affordable: ${listing?.price}</h2>
                <ul>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>Indevidualized Invoice</li>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>24 hour support</li>
                <li><ion-icon id='listing-checkmark' name="checkmark-outline"></ion-icon>Satisfaction Gurarantee</li>
                </ul>
                <div id='button-container'>
                <button id='add-to-cart' onClick={handleAddToCart}> <ion-icon name="cart-outline"></ion-icon> Add to cart</button>
                <button id='buy-now' onClick={()=> {setIsConfirming(true)}}>Buy now</button>
                </div>
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
                <p>{seller?.first_name} {seller?.last_name}</p>
                <p id='listing-seller-rating'> {'⭐️'.repeat(seller?.rating)}{'★'.repeat(5 - seller?.rating)}</p>
                <p id='seller-rating-num' >{seller?.rating}</p>
              </div>
                <p>{seller?.bio}</p>
            </div>
        </div>
        {isConfirming&&< ConfirmTransaction setIsConfirming={setIsConfirming} isPurchase={isPurchase} listing={listing}/> }
    </div>
)
}

export default ListingPage