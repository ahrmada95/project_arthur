import { NavLink } from 'react-router-dom'
import '../styles/SuggestedProductsHome.css'
import ProductCard from './ProductCard'

const SuggestedProductsHome = () => {

 
return (
    <div id='suggested-products-home'>
        <h1>Suggested products</h1>
        <div id='suggested-products-container'>
        <ProductCard product={{img: '../example-product.jpeg', title: 'I will build you an amazing custom keyboard', price: '100', id: 3}}/>
         <ProductCard product={{img: '../example-web.webp', title: 'I will build you a customer wordpress website', price: '200', id: 2}}/>
        <ProductCard product={{img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264169987/original/3f6f79de873f7fc0ee77337471a87e3752c3a3c5/do-a-marketing-strategy-to-increase-your-instagram-followers.png', title: 'I will build your social media presence', price: '6000', id: 1}}/>
          
        </div>
    </div>
)
}

export default SuggestedProductsHome