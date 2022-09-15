import { NavLink, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
 
import '../styles/SearchPage.css'
import ProductCard from './ProductCard'
const SearchPage = () => {
    let {searchValue} = useParams()
    window.scrollTo(0, 0);
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
       <h1 id='search-header'>Showing results for {`"${searchValue.split(':')[1] || 'All'}"`}</h1>
       <div id='search-results-container'>
           <div id='search-results-wrapper'>
    {listings.length == 0 && <div id='no-search-res-container'> <img id='no-search-res' src='../no-search-res.svg'/> <h1>Oh No! Looks like that item doesn't exist</h1></div>}
    { listings.length != 0 &&listings.map(listing => <ProductCard key={listing.id} product={listing}/>)}
           </div>
       </div>
   </div>
)
}
 
export default SearchPage