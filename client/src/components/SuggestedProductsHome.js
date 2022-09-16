import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/SuggestedProductsHome.css'
import ProductCard from './ProductCard'

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
    

    // const newSuggested = []

    // if (suggested.size >= 3) {
    //     newSuggested = suggested.splice(0,3)    
    // } 
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
        {/* <ProductCard product={{images: '../example-product.jpeg', name: 'I will build you an amazing custom keyboard', price: '100', id: 3}}/>
         <ProductCard product={{images: '../example-web.webp', name: 'I will build you a customer wordpress website', price: '200', id: 2}}/>
        <ProductCard product={{images: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264169987/original/3f6f79de873f7fc0ee77337471a87e3752c3a3c5/do-a-marketing-strategy-to-increase-your-instagram-followers.png', title: 'I will build your social media presence', price: '6000', id: 1}}/> */}
          
        </div>
    </div>
)
}

export default SuggestedProductsHome