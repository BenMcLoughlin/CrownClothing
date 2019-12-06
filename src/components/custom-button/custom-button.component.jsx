import React from 'react'
import "./custom-button.styles.scss"

export default function Button({children, isGoogleSignIn, ...otherProps}) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
