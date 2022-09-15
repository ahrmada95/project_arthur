import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

const ConfirmTransaction =({setIsConfirming, isPurchase, listing}) => {


console.log(listing)
const navigate = useNavigate()

const createTransaction =async () => {
    let userId = Cookies.get('auth-token')
    let req = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({listing_id: listing.id, status: 'requested', user_id:userId, seller_id: listing.seller_id})
    })
    let res = await req.json()
    if (req.ok){
        navigate('/profile')
    }
}

return (
    <div id='buyer-confirm-fullscreen' onClick={()=> {setIsConfirming(false)}}>
        <div id='buyer-confirm-window' onClick={(e) => {e.stopPropagation()}}>
            <h2>This is a title for the transaction</h2>
            {
                isPurchase? <textarea id='confirm-textarea' maxlength="500" placeholder="Please describe in detail your needs for this project..."></textarea>:
                <p>This is the description of the transacion that I am going to approve because I am not a garbage human being who takes advantage of people</p>
            }
            <p>{isPurchase? 'Confirm order?':'Approve this transacion?'}</p>
            <div id='buyer-confirm-btns'>
            <button onClick={()=>setIsConfirming(false)} id='buyer-confirm-deny-btn'>{isPurchase?'Back':'Deny'}</button>
            {isPurchase? <button id="buyer-confirm-confirm-btn" onClick={()=> {createTransaction(); setIsConfirming(false); }}>Continue</button>
            :  <button id="buyer-confirm-confirm-btn">Approve</button>}
            
          

            </div>
        </div>
    </div>
)
}

export default ConfirmTransaction