import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

const ConfirmTransaction =({setIsConfirming, isPurchase, listing, id, setCompletedCards, completedCards }) => {
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
    }}

    const transactionComplited = async() => {

        let req = await fetch(`http://localhost:3000/transactions/${id}`,{
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({status: "approved"})
            })
        let res = await req.json()
    }

    const transactionDenied = async() => {
        
        let req = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({status: "denied"})
        })
        let res = await req.json()
    }
    const handleApprove = () =>{
        setIsConfirming(false)
        transactionComplited()
        let transaction = completedCards.filter(card => card.id !== id)
        setCompletedCards(transaction)

    }

    const handleDeny = () =>{
        setIsConfirming(false)
        transactionDenied()
        let transaction = completedCards.filter(card => card.id !== id)
        setCompletedCards(transaction)
    }

 
return (
    <div id='buyer-confirm-fullscreen' onClick={()=> {setIsConfirming(false)}}>
        <div id='buyer-confirm-window' onClick={(e) => {e.stopPropagation()}}>
            <h2>{listing?.title }</h2>
            {
                isPurchase? <textarea id='confirm-textarea' maxlength="500" placeholder="Please describe in detail your needs for this project..."></textarea>:
                <p>{listing?.description}</p>
            }
            <p>{isPurchase? 'Confirm order?':'Approve this transacion?'}</p>
            <div id='buyer-confirm-btns'>
            <button onClick={handleDeny} id='buyer-confirm-deny-btn' >{isPurchase?'Back':'Deny'}</button>
            {isPurchase? <button id="buyer-confirm-confirm-btn" onClick={()=> {createTransaction(); setIsConfirming(false); }}>Continue</button>
            :  <button id="buyer-confirm-confirm-btn" onClick={handleApprove}>Approve</button>}
            
          

            </div>
        </div>
    </div>
)
}

export default ConfirmTransaction