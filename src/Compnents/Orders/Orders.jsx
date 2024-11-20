import React,{useEffect, useState} from 'react'
import './Orders.css'
import {db} from '../Firbase/firebase.jsx'
import {collection,doc,query,orderBy,onSnapshot} from 'firebase/firestore'
import { useStateValue } from '../State_provider/State_provider'
import Order from '../Order/Order.jsx'


function Orders() {
    const [{cart,user},dispatch]=useStateValue()
    const [orders,setOrders]=useState([])

    
    

    useEffect(()=>{
        if(user){
            const userOrdersRef = collection(db, 'users', user?.uid, 'orders');
            const q = query(userOrdersRef, orderBy('created', 'desc'));
    
            onSnapshot(q, (snapshot) => {
                setOrders(
                    snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                    }))
                );
                });
        }else(setOrders([]))
    },[user])
  return (
    <div className='orders_order'>
        <h1 className="orders_title">Your Orders</h1>
        {orders?.map(order=>(
            <Order order={order}/>
        ))}
    </div>
  )
}

export default Orders