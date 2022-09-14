import { UserContext } from "../App"
import { useState, useEffect, useContext } from "react"
import BuyerCard from "./BuyerCard"
import ConfirmTransaction from "./ConfirmTransaction"
import '../styles/BuyerPage.css'

const BuyerPage = () => {
    const [isConfirming, setIsConfirming] = useState(false)
    const {globalUser, setGloblUser} = useContext(UserContext)
    const [inProgressCards, setInProgreesCards] = useState([])
    const [completedCards, setCompletedCards] = useState([])


     useEffect(()=> {
       const getTransactions =async() => {
            let req = await fetch(`http://localhost:3000/trans/5`)
            let res = await req.json()
            setInProgreesCards(res.in_progress)
            setCompletedCards(res.completed)
        }   
        
        getTransactions()
    }, [])
    console.log(inProgressCards, completedCards)
    return (
    <div id='buyer-page'>
        <div id="buyer-welcome">
            <h1>Welcome, {globalUser?.first_name}</h1>
        </div>
        <div id="buyer-in-the-works">
            <h2>In progress:</h2>
            {inProgressCards&& inProgressCards.map(card => {
                console.log(card.status)
                return(
                    <BuyerCard cardType={'in_progress'} title={card?.listing?.name} description={card?.listing?.description} />
                )
            })}
        </div>
        <div id='buyer-approve'>
            <h2>Ready for approval</h2>
            {completedCards && completedCards.map(card => {
                return(
                    <BuyerCard cardType={'completed'} title={card?.listing?.name} description={card?.listing?.description} setIsConfirming={setIsConfirming} />
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