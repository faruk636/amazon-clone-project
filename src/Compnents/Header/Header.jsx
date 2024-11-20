import React from 'react'
import './Header.css'
import amazonLogo from '../../assets/amazon_logo.03741306c91ce760c83ed5f2f50c4937.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../State_provider/State_provider';
import { auth } from '../Firbase/firebase';
import { signOut } from 'firebase/auth';
function Header() {
    const [{cart,user},dispatch]=useStateValue()


    const handleAuthentication=()=>{
        if(user){
            signOut(auth)
        }
    }
  return (
    <div className='header'>
        <Link to='/'>
            <img src={amazonLogo} alt='logo' className='header_Logo'/>
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_nav">
        <Link to={!user &&'/login'}>
            <div className="header_options navHover" onClick={handleAuthentication}>
                <span className="header_option_line1">Hello,{!user ?'Guest':user.email} </span>
                <span className="header_option_line2">{user ? 'SignOut':'SignIn'}</span>
            </div>
        </Link>
        <Link to={'/orders'}>
            <div className="header_options navHover">
                <span className="header_option_line1">Returns</span>
                <span className="header_option_line2">& Orders</span>
            </div>
        </Link>

        <Link to='/checkout'>
            <div className="header_optionBasket navHover">
                <ShoppingCartIcon className='cartIcon'/>
                <span className='shopping_counter header_option_line2'>{cart?.length}</span>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default Header