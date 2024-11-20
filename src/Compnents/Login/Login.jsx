import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../Firbase/firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth' 

function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const signIn=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            if(auth){
                navigate('/')
            }
        })
        .catch(err=>alert(err.message))
    }
    const register=e=>{
        e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            // console.log(auth)
            if(auth){
                navigate('/')
            }
        })
        .catch(err=>alert(err.message))

    }
  return (
    <div className='login'>
        <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Amazon" className="login_logo" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" className='login_signInButton' onClick={signIn}>Sign-in</button>
            </form>
            <p>
                  By signing-in you agree to the AMAZON CLONE Conditions of Use &
                  Sale. Please see our Privacy Notice, our Cookies Notice and our
                  Interest-Based Ads Notice.</p>
                <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login