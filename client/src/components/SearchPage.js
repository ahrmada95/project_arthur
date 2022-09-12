import { NavLink } from 'react-router-dom'
 
import '../styles/SearchPage.css'
import ProductCard from './ProductCard'
const SearchPage = () => {
return (
   <div id='search-page'>
       <h1 id='search-header'>Results for {`"Item"`}</h1>
       <div id='search-results-container'>
           <div id='search-results-wrapper'>
      <NavLink to='/listing' style={{textDecoration: 'none', color:'black'}}><ProductCard product={{img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264169987/original/3f6f79de873f7fc0ee77337471a87e3752c3a3c5/do-a-marketing-strategy-to-increase-your-instagram-followers.png', title: 'I will build your social media presence', price: '$6000'}}/></NavLink>
           </div>
       </div>
   </div>
)
}
 
export default SearchPage