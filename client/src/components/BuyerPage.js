import { UserContext } from "../App"
import { useState, useEffect, useContext } from "react"
import '../styles/BuyerPage.css'

const BuyerPage = () => {
return (
    <div id='buyer-page'>
        <div id="buyer-welcome">
            <h1>Welcome, buyer</h1>
        </div>
        <div id="buyer-in-the-works">
            <div className="buyer-card">
                <div className="buyer-card-info">
                <h3>Title</h3>
                <p>This is the description of the task that was asinged to the seler</p>
                </div>
                <div className="buyer-card-status">
                    <button>In-progress</button>
                </div>
            </div>
        </div>
        <div id='buyer-approve'>
            <div className="buyer-approve-card">
                <div className="buyer-approve-card-info">
                    <h3>Title</h3>
                    <p>This is the description of the project tot be approved</p>
                </div>
            </div>
            <div className="buyer-approve-card-status">
                <button>Continue to approval <ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
        </div>
    </div>
)
}

export default BuyerPage