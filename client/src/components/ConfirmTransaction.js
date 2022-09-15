import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

const ConfirmTransaction =({setIsConfirming, isPurchase, listing, id, setCompletedCards, completedCards }) => {
console.log(id)
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
        console.log("filtered" + transaction)
        setCompletedCards(transaction)

    }

    const handleDeny = () =>{
        setIsConfirming(false)
        console.log("id "+ id)
        transactionDenied()
        let transaction = completedCards.filter(card => card.id !== id)
        
        console.log("filtered" + transaction)
        setCompletedCards(transaction)
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
            <button onClick={handleDeny} id='buyer-confirm-deny-btn' >{isPurchase?'Back':'Deny'}</button>
            {isPurchase? <button id="buyer-confirm-confirm-btn" onClick={()=> {createTransaction(); setIsConfirming(false); }}>Continue</button>
            :  <button id="buyer-confirm-confirm-btn" onClick={handleApprove}>Approve</button>}
            
          

            </div>
        </div>
    </div>
)
}

export default ConfirmTransaction