import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from '../State_provider/State_provider'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'
import { Link, useNavigate } from 'react-router-dom'
import { useElements, useStripe,CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getCartTotal} from '../Reducer/Reducer'
import axios from "../axios/axios"
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firbase/firebase.jsx';


function Payment() {
    const [{user,cart},dispatch]=useStateValue()

    const stripe=useStripe()
    const elements=useElements()
    const navigate=useNavigate()

    const [error,setError]=useState(null)
    const [disabled,setDisabled]=useState(true)
    const [processing,setProcessing]=useState('')
    const [succeeded,setSucceeded]=useState(false)
    const [clientSecret,setClientSecret]=useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const response = await axios.post(`/payments/create`, {
                    total: Math.round(getCartTotal(cart) * 100)
                });
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error("Error fetching client secret:", error);
            }
        };
    
        if (cart.length > 0) { // Ensure cart has items and clientSecret isn't already set
            getClientSecret();
        }
    }, [cart]);
    
    
    console.log("Payment request received",clientSecret);
    

    const handleSubmit=async event=>{
        event.preventDefault()
        setProcessing(true)

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            const userRef = doc(collection(db, 'users'), user.uid);
            const ordersRef = doc(collection(userRef, 'orders'), paymentIntent.id);

    setDoc(ordersRef, {
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created
    });
        

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            navigate('/orders',{replace:true})
        })

    }

    const handleChange=event=>{
        setDisabled(event.empty)
        setError(event.error ? event.error.message:'')
    }
  return (
    <div className='payment'>
        <div className="payment_container">
            <div className="payment_head">
                <h1>Checkout(<Link to='/checkout'>{cart?.length} items</Link>)</h1>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>Email:{user?.email}</p>
                    <p>Transportation:Car</p>
                    <p>Address:Addis Ababa,Ethiopia</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    {cart?.map(item=>(
                        <CheckoutProducts 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <h4>Order Total: {value}</h4>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType='text'
                                thousandSeparator={true}
                                prefix='$'
                            />
                            <button disabled={disabled|| processing||succeeded}>
                                {processing? <p>Processing</p>:'Buy now'}
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment