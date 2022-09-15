import { useState, useEffect } from "react"
import '../styles/SellerOnBoard.css'
import Cookies from 'js-cookie'
import TermsAndConditions from "./TermsAndConditions"
import {NavLink} from 'react-router-dom'

const SellerOnBoard = () => {
    window.scrollTo(0, 0);
    const [isConfirming, setIsConfirming] = useState(false)
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [isStepTwo, setIsStepTwo] = useState(false)
    const [sellerBio, setSellerBio] = useState()

    const makeUserSeller = async() => {
        let userId = Cookies.get('auth-token')
        let req = await fetch('http://localhost:3000/make_seller', {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({user_id: userId, bio: sellerBio})
        })

}






return (
    <div id='seller-onboard'>
        <div id='seller-onboard-container'>
            <div id='onboard-header'>
            </div>
            <div id='oboard-hero'>
                <h2>Join our growing community of freelancers</h2>
                <p>Work when you want, without having to leave the comfort of your own home</p>
                <button onClick={()=> {setIsConfirming(true)}}>Join the team</button>
            </div>
            <div id='onboard-how-it-works'>
                <h1>How it works</h1>
                <div id='onboard-hoow-it-works-container'>
                    <div className="onboard-card">
                        <ion-icon name="create-outline"></ion-icon>
                        <h1>1. Create a listing</h1>
                        <p>Sign up for free, grow your audience and make connections</p>
                    </div>
                    <div className="onboard-card">
                    <ion-icon name="color-palette-outline"></ion-icon>
                        <h1>2. Unleash your creativity</h1>
                        <p>Make a great product that you customers will rave about and the buisness will keep flowing</p>
                    </div>
                    <div className="onboard-card">
                    <ion-icon name="cash-outline"></ion-icon>
                        <h1>3. Get paid</h1>
                        <p>Payment is available after every sale so you can get your money now.</p>
                    </div>
                </div>
            </div>
        </div>
        {isConfirming && 
             <div id='onboard-model' onClick={()=> {setIsConfirming(false)}}>
                {isConfirming &&  !isStepTwo && <div id='seller-setup' onClick={(e)=> {e.stopPropagation()}}>
                    <h1>Please enter a bio</h1>
                    <textarea  id='bio-text' onChange={(e)=> {setSellerBio(e.target.value)}} placeholder="Fun Fact: Creaters who share stories in their bios recive more buisness..."></textarea>
                    <button onClick={()=> {sellerBio &&  setIsStepTwo(true)}} >Next</button>
                    </div>}
             { isStepTwo &&<div id='onboard-model-container' onClick={(e)=> {e.stopPropagation()}}>
                     <h2>You're almost there!</h2>
                     <p>Accept the terms and conditions and continue to dashboard</p>
                     <div id='terms-and-conditions'>
                     <p>{TermsAndConditions}</p>
                     </div>
                     <label htmlFor="terms">I accept terms and conditions <input type='checkbox' onChange={()=> {setAgreedToTerms(prev=>!prev)}} id='terms'/></label>
                    {
                        agreedToTerms?  <NavLink to='/dashboard'><button id="model-new-btn" onClick={()=> {makeUserSeller()}}>Contine to dashboard</button></NavLink> :  <div id="model-new-btn">Contine to dashboard</div>
                    }
                    
             </div>}
         </div>
        }
       
    </div>
)
}

export default SellerOnBoard