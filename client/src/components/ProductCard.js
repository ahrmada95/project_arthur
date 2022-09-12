import {useState} from 'react'
const ProductCard = (product) => {
    const [hover, setHover] = useState(false)
    return (
        <div className='product-card' onMouseEnter={()=> {setHover(true)}} onMouseLeave={()=> {setHover(false)}}>
        <img id="product-card-img" src={product?.product?.img}/>
        <p className={hover? 'hover': ''}>{product?.product?.title}</p>
        <p id='prodcut-card-price' className={hover? 'hover': ''}>{product.product.price}</p>
    </div>
    )
}

export default ProductCard