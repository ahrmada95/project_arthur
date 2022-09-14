import { NavLink, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

import '../styles/SearchPage.css'
import ProductCard from './ProductCard'
const SearchPage = () => {
    let {searchValue} = useParams()
    const[listings, setListings] = useState([])
        useEffect(()=> {
        const getListings =async() => {
            let req = await fetch(`http://localhost:3000/search?key=${searchValue.substring(1)}`)
            let res = await req.json()
            setListings(res)
        }   
        
        getListings()
    }, [])

return (
   <div id='search-page'>
       <h1 id='search-header'>Results for {`"Item"`}</h1>
       <div id='search-results-container'>
           <div id='search-results-wrapper'>
      <NavLink to='/listing' style={{textDecoration: 'none', color:'black'}}> {listings.map(listing => <ProductCard key={listing.id} product={listing}/>)}</NavLink>
           </div>
       </div>
   </div>
)
}
 
export default SearchPage