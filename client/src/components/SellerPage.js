import '../styles/SellerPage.css'
import { UserContext } from '../App'
import { useState, useEffect, useContext } from 'react'
import ConfirmTransaction from './ConfirmTransaction'
import { useNavigate } from 'react-router-dom'
import SellerCard from './SellerCard'
import Cookies from 'js-cookie'

const SellerPage = () => {
    const isPurchase = false
    const navigate = useNavigate()
    const {globalUser, setGlobalUser} = useContext(UserContext)
    const [isAddingListing, setIsAddingListing] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [listingInfo, setListingInfo] = useState()
    window.scrollTo(0, 0);
    const [currentListing, setCurrentListing] = useState()
    const [isConfirming, setIsConfirming] = useState(false)
    useEffect(()=> {
        const getUser = async() => {
            let userId = Cookies.get('auth-token')
            let req = await fetch(`http://localhost:3000/get_listing_by_user`, {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({user_id: userId})
            })
            let res = await req.json()
            console.log(res)
            if (!req.ok){
                navigate('/')
            }
            setTransactions(res)
           
        }
        getUser()
    }, [])
   
const addLisitng = async() => {
    let req = await fetch('http://localhost:3000/listings', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(listingInfo)
    })
    let res = await req.json()
    console.log(res)
}

const handleChange = (key, value) => {
    setListingInfo({seller_id: globalUser.seller_id})
    setListingInfo({
        ...listingInfo,
        [key]: value
    })
} 
   
console.log(listingInfo)
    return (
<div id='seller-page'>
    <div id='seller-welcome'>
        <h2>Welcome, {globalUser?.first_name }</h2>
        <button id='add-listing-btn' onClick={()=> {setIsAddingListing(true)}}>Add listing</button>
    </div>
    <div className='seller-container'>
        <div className='seller-req'>
            <h2>Requests:</h2>
            {transactions.map(item => {
                if (item.status == 'requested'  && item?.seller_id == globalUser?.seller_id){
                return (
                    <SellerCard setIsConfirming={setIsConfirming} setCurrentListing={setCurrentListing} item={{title: item?.listing?.name, description: item?.listing?.description, id: item?.id, status: item?.status}}/>
                )
                }
            })}
        </div>
        <div className='seller-req'>
            <h2>In-progress:</h2>
            {transactions.map(item => {
                if (item.status == 'in-progress' && item?.seller_id == globalUser?.seller_id){

                    return (
                        <SellerCard setIsConfirming={setIsConfirming} item={{title: item?.listing?.name, description: item?.listing?.description, status: item?.status, id: item?.id}}/>
                    )
                }
            })}

        </div>
    </div>
    {isAddingListing && <div id='add-listing-popup' onClick={()=> {setIsAddingListing(false)}}>
        <div id='add-listing-container' onClick={(e)=> {e.stopPropagation()}}>
            <h1>Enter listing information...</h1>
            <input id='enter-title' placeholder='Enter a short and descriptive title' name='name' onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
            <textarea name='description' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} placeholder='Enter a a detailed description of what your product does or what purpose it serves' id='enter-description'/>
            <input id='seller-price' placeholder='Enter a price...' name='price'  onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
            <input id='-sellerimages' placeholder='Enter a link to your display image ' name='images' onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
            <button onClick={()=> {addLisitng()}}>Add listing</button>
        </div>
        </div>}
    {isConfirming&&< ConfirmTransaction setIsConfirming={setIsConfirming} isPurchase={isPurchase} listing={currentListing}/> }
</div>
    )
}

export default SellerPage