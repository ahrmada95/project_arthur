import { UserContext } from "../App"
import { useState, useEffect, useContext } from "react"
import BuyerCard from "./BuyerCard"
import ConfirmTransaction from "./ConfirmTransaction"
import '../styles/BuyerPage.css'

const BuyerPage = () => {
    const [isConfirming, setIsConfirming] = useState(false)
    const {globalUser, setGloblUser} = useContext(UserContext)
    const [inProgressCards, setInProgreesCards] = useState([{status: 'in-progress', title: 'This is a title', description:'This is a description of the the thing that was submitted to be done' }])
    const [completedCards, setCompletedCards] = useState([{status: 'completed', title: 'This is a title', description:'This is a description of the the thing that was submitted to be done' }])
return (
    <div id='buyer-page'>
        <div id="buyer-welcome">
            <h1>Welcome, {globalUser?.first_name}</h1>
        </div>
        <div id="buyer-in-the-works">
            <h2>In progress:</h2>
            {inProgressCards.map(card => {
                return(
                    <BuyerCard cardType={card.status} title={card.title} description={card.description} />
                )
            })}
        </div>
        <div id='buyer-approve'>
            <h2>Ready for approval</h2>
            {completedCards.map(card => {
                return(
                    <BuyerCard cardType={card.status} title={card.title} description={card.description} setIsConfirming={setIsConfirming} />
                )
            })}
        </div>

        <div id='buyer-sugested-products'>

        </div>
       {isConfirming&& <ConfirmTransaction setIsConfirming={setIsConfirming}/>}
    </div>
)
}

export default BuyerPage