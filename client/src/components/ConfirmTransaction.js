const ConfirmTransaction =({setIsConfirming}) => {
return (
    <div id='buyer-confirm-fullscreen' onClick={()=> {setIsConfirming(false)}}>
        <div id='buyer-confirm-window' onClick={(e) => {e.stopPropagation()}}>
            <h2>This is a title for the transaction</h2>
            <p>This is the description of the transacion that I am going to approve because I am not a garbage human being who takes advantage of people</p>
            <p>Approve this transacion?</p>
            <div id='buyer-confirm-btns'>
            <button id='buyer-confirm-deny-btn'>Deny</button>
            <button id="buyer-confirm-confirm-btn">Approve</button>
            </div>
        </div>
    </div>
)
}

export default ConfirmTransaction