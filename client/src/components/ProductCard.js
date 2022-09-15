import {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const ProductCard = (product) => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='product-card' onMouseEnter={()=> {setHover(true)}} onMouseLeave={()=> {setHover(false)}} onClick={()=> {navigate(`/listing/${product.product.id}`)}}>
        <img id="product-card-img" src={product.product.images}/>
        <p >{product.product.name}</p>
        <p id='prodcut-card-price'>$ {product.product.price}</p>
    </div>
    )
}

export default ProductCard