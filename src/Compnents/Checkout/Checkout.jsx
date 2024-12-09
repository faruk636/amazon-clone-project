import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../State_provider/State_provider'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'
import { motion } from 'framer-motion'


function Checkout() {
    const [{cart,user},dispatch]=useStateValue()
return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img
            className='checkout_ad' 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout_img" />
            <div>
                <h3>{user?.email}</h3>
                <h2 className="checkout_title">Your shopping cart</h2>
            </div>
            {cart?.map((item) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                >
            <CheckoutProducts
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
            />
            </motion.div>
))}
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
)
}

export default Checkout