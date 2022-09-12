const ConfirmTransaction =({setIsConfirming, isPurchase}) => {
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
            <button  id="buyer-confirm-confirm-btn">{isPurchase? 'Continue':'Approve'}</button>
            </div>
        </div>
    </div>
)
}

export default ConfirmTransaction