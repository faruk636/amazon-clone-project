import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {getCartTotal} from '../Reducer/Reducer'
import './Subtotal.css'
import { useStateValue } from '../State_provider/State_provider'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
    const [{cart}]=useStateValue()
    const navigate=useNavigate()


  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal({cart?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order gets a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType='text'
        thousandSeparator={true}
        prefix='$'
        />
        <button type="" className='checkout_button' onClick={e=>navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal