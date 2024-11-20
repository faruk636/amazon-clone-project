import React from 'react'
import './CheckoutProducts.css'
import { useStateValue } from '../State_provider/State_provider'

function CheckoutProducts({id,image,title,price,rating,hiddenButton}) {

    const [{cart},dispatch]=useStateValue()

    const removeFromCart=()=>{
        dispatch(
            {
                type:'REMOVE_FROM_CART',
                id:id
            }
        )
    }

  return (
    <div className='check_out_product'>
        <img src={image} alt="" className='check_out_product_image'/>
        <div className="check_out_product_info">
            <p className="check_out_product_title">{title}</p>
            <div className="check_out_product_price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="check_out_product_rating">
                {Array(rating).fill().map((_,i)=>(
                    <p>🌟</p>
                ))}
            </div>
            {!hiddenButton && <button type="" onClick={removeFromCart}>Remove From Cart</button>}
            
        </div>
    </div>
  )
}

export default CheckoutProducts