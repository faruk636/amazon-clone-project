import './App.css'
import Header from './Compnents/Header/Header'
import Home from './Compnents/Home/Home'
import Login from './Compnents/Login/Login'
import Checkout from './Compnents/Checkout/Checkout'
import { Routes,Route } from 'react-router-dom'
import { auth } from './Compnents/Firbase/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import { useStateValue } from './Compnents/State_provider/State_provider'
import { useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Payment from './Compnents/Payment/Payment'
import Orders from './Compnents/Orders/Orders'
import BackToTop from './Compnents/BackToTop/BackToTop'

const promise=loadStripe('pk_test_51QIMXjEyIfxdSU9hA1PbsPF2M5GbaEkakFQJkInT23qiemiBpSDblK8X0ywrDOUMHk9ZePVIE2Rtb4b1yq9YyhPV00unm50IlH')

function App() {
  const [{user},dispatch]=useStateValue()

  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch({
          type:'SET_USER',
          user:userAuth
        })
      }else{dispatch({
        type:"SET_USER",
        user:null
      })}
    })
  },[])

  return (
    <div className='app'>
      <Routes>

        <Route index element={<><Header/><Home/><BackToTop/></>}/>
        <Route path="/checkout"  element={<><Header/><Checkout/><BackToTop/></>}/>
        <Route path="/login"    element={<Login/>}/>
        <Route path='/payment'  element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
        <Route path="/orders"  element={<><Header/><Orders/><BackToTop/></>}/>
      </Routes>
      
    </div>
  )
}

export default App
