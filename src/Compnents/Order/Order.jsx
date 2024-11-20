import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'
import CurrencyFormat from 'react-currency-format'


function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='order_id'>
          <small>{order.id}</small>
        </p>
        {order.data.cart?.map(item=>(
          <CheckoutProducts 
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hiddenButton
          />
        ))}
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <h3 className='order_total'>
                Order total: {value}
            </h3>
            </>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType='text'
        thousandSeparator={true}
        prefix='$'
        />

    </div>
  )
}

export default Order