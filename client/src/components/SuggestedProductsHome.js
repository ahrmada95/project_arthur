import { NavLink } from 'react-router-dom'
import {useEffect} from 'react'
import '../styles/SuggestedProductsHome.css'
import ProductCard from './ProductCard'
import { useState } from 'react'

const SuggestedProductsHome = () => {
 const [suggested, setSuggest]= useState([])

    useEffect ( () => {
       
        const getSuggestedArray = async() => {
            let req = await fetch(`http://localhost:3000//users/suggested/${localStorage.getItem('tracking_id')}`)
            let res = await req.json()
           setSuggest(res)
        }
        getSuggestedArray()
    }, [])
    
const newSuggested = suggested.splice(0,3)    

return (
    <div id='suggested-products-home'>
        <h1>Suggested products</h1>
        <div id='suggested-products-container'>
         <> 
         {newSuggested.map((listing) => {
            return(
            <ProductCard product={listing}/>
                    // console.log("product", listing)
                     )
                 } )}
            </>
        </div>
    </div>
)
}

export default SuggestedProductsHome