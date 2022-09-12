

const BuyerCard = ({cardType, title, description, setIsConfirming}) => {


const cardToShow = () => {
    if (cardType == 'in-progress'){
        return(
            <div className="buyer-card">
            <div className="buyer-card-info">
                <h3>{title}</h3>
                <p>{description}</p>
                </div>
                <div className="buyer-card-status">
                <button>In-progress</button>
            </div>
        </div>
        )
    }

    else if (cardType == 'completed'){
        return (
            <div className="buyer-approve-card">
            <div className="buyer-approve-card-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="buyer-approve-card-status">
                <button onClick={()=> {setIsConfirming(true)}}>Continue to approval <ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
        </div>
        )
    }
}





return (
   <>{cardToShow()}</>

)
}

export default BuyerCard