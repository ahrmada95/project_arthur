import { UserContext } from "../App"
import { useState, useEffect, useContext } from "react"
import BuyerCard from "./BuyerCard"
import ConfirmTransaction from "./ConfirmTransaction"
import '../styles/BuyerPage.css'
import { NavLink, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

const BuyerPage = () => {
    const navigate = useNavigate()
    const [isConfirming, setIsConfirming] = useState(false)
    const {globalUser, setGloblUser} = useContext(UserContext)
    const [inProgressCards, setInProgreesCards] = useState([])
    const [completedCards, setCompletedCards] = useState([])


     useEffect(()=> {
        if (!Cookies.get('auth-token')){
            navigate('/')
        }

       const getTransactions =async() => {
            let userId = Cookies.get('auth-token')
            let req = await fetch(`http://localhost:3000/trans`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({user_id: userId})
            })
            let res = await req.json()
            if (req.ok){
                setInProgreesCards(res.in_progress)
                setCompletedCards(res.completed)
                console.log(res)
            }
        }   
        
        getTransactions()
    }, [])


    //add redirect
    return (
    <div id='buyer-page'>
        <div id="buyer-welcome">
            <h1>Welcome, {globalUser?.first_name}</h1>
        </div>
        <div id="buyer-in-the-works">
            {inProgressCards?.length == 0 && completedCards?.length == 0 &&
             <div id="no-projects">
                <img src="../no-proejcts.svg"/>
                <h2>Looks like you don't have any orders yet</h2>
            </div>}
           { inProgressCards?.length != 0 && <h2>In progress:</h2>}
            {inProgressCards&& inProgressCards.map(card => {
                return(
                    <BuyerCard cardType={'in_progress'} title={card?.listing?.name} description={card?.listing?.description} />
                )
            })}
        </div>
        <div id='buyer-approve'>

            {completedCards.length != 0 && <h2>Ready for approval</h2>}
            {completedCards && completedCards.map(card => {
                return(
                    <BuyerCard cardType={'completed'} title={card?.listing?.name} description={card?.listing?.description} setIsConfirming={setIsConfirming} />
                )
            })}
        </div>

        <div id='buyer-sugested-products'>

        </div>
        <div id="profile-become-seller">
            <h2>Feeling creative?</h2>
            <NavLink to='/become-a-seller'><button>Become a seller</button></NavLink>
        </div>
       {isConfirming&& <ConfirmTransaction setIsConfirming={setIsConfirming} />}
    </div>
)
}

export default BuyerPage