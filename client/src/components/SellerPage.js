import '../styles/SellerPage.css'
import { UserContext } from '../App'
import { useState, useEffect, useContext } from 'react'
import SellerCard from './SellerCard'

const SellerPage = () => {
    const {globalUser, setGlobalUser} = useContext(UserContext)
    return (
<div id='seller-page'>
    <div id='seller-welcome'>
        <h2>Welcome, {globalUser?.first_name }</h2>
    </div>
    <div className='seller-container'>
        <div className='seller-req'>
            <h2>Requests:</h2>
            <SellerCard item={{title: 'This is a title', description: 'This is a description that has quite a few words in it I really like this description of the product', status: 'pending'}}/>
        </div>
        <div className='seller-req'>
            <h2>In-progress:</h2>
            <SellerCard item={{title: 'This is a project in prgress.', description: 'I really like doing projects for money its really cool.  Its really fun doing these things', status: 'in_progress'}}/>
        </div>
    </div>
</div>
    )
}

export default SellerPage