import React from 'react'
import {Link} from "react-router-dom"
import styles from "./header.style.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signout}>SIGN OUT</div>
                :
                <Link>SIGN IN</Link>
            }
            <CartIcon/>
            
            </div>
            {
                hidden ? 
            null
                :
                <CartDropdown/>
            }
       
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header)
