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
   
    const [transactions, setTransactions] = useState([])
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
            setTransactions(res)
            if (!res.ok){
                navigate('/')
                setTransactions(res)
            }
        }
        getUser()
    }, [])
   

   
console.log(globalUser)
    return (
<div id='seller-page'>
    <div id='seller-welcome'>
        <h2>Welcome, {globalUser?.first_name }</h2>
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
    {isConfirming&&< ConfirmTransaction setIsConfirming={setIsConfirming} isPurchase={isPurchase} listing={currentListing}/> }
</div>
    )
}

export default SellerPage