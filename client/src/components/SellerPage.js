import '../styles/SellerPage.css'
import { UserContext } from '../App'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SellerCard from './SellerCard'
import Cookies from 'js-cookie'

const SellerPage = () => {
    const {globalUser, setGlobalUser} = useContext(UserContext)
    const [transactions, setTransactions] = useState([])
    const navigate = useNavigate()
    window.scrollTo(0, 0);
    useEffect(()=> {
        const getUser = async() => {
            let userId = Cookies.get('auth-token')
            let req = await fetch(`http://localhost:3000/get_listing_by_user`, {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({user_id: userId})
            })
            let res = await req.json()
            setTransactions(res)
            if (!res.ok){
                navigate('/')
            }
        }
        getUser()
    }, [])
    return (
<div id='seller-page'>
    <div id='seller-welcome'>
        <h2>Welcome, {globalUser?.first_name }</h2>
    </div>
    <div className='seller-container'>
        <div className='seller-req'>
            <h2>Requests:</h2>
            {transactions.map(item => {
                if (item.status == 'requested'){
                return (
                    <SellerCard item={{title: item?.listing?.name, description: item?.listing?.description, status: item?.status}}/>
                )
                }
            })}
        </div>
        <div className='seller-req'>
            <h2>In-progress:</h2>
            {transactions.map(item => {
                if (item.status == 'in_progress'){

                    return (
                        <SellerCard item={{title: item?.listing?.name, description: item?.listing?.description, status: item?.status}}/>
                    )
                }
            })}

        </div>
    </div>
</div>
    )
}

export default SellerPage