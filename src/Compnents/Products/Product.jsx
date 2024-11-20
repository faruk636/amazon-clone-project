import React from 'react'
import './Product.css'
import { useStateValue } from '../State_provider/State_provider'

function Product({id,title,price,rating,image,}) {
    const [{cart},dispatch]=useStateValue()
    // console.log(cart)

    const Add_to_cart=()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            }
        })
    }
  return (
    < div className='product'>
        <div className="product_info">
            <p className="product_description">{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i)=>(
                    <p key={i}>🌟</p>
                ))}
                
            </div>
        </div>
    <img src={image}alt="laptop" className='product_image'/>
        <button type="" onClick={Add_to_cart}>Add to cart</button>
    </div>
  )
}

export default Product