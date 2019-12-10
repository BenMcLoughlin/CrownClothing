import React from 'react'
import CustomButton from "../custom-button/custom-button.component"
import styles from "./cart-dropdown.styles.scss"
import {connect} from "react-redux"

function CartDropdown() {

    return (
       <div className={`cart-dropdown`}>
           <div className="cart-items">

           </div>
           <CustomButton>Go To Chackout</CustomButton>
       </div>
    )
}




export default CartDropdown