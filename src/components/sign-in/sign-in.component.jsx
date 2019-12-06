import React, { Component } from 'react'
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import Button from "../custom-button/custom-button.component"
import { signInWithGoogle } from "../../firebase/firebase.utils"

export default class SignIn extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
       const {handle, name} = e
 
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I Already Have an Account</h2>
                <span>Sign In with your email and password</span>
                <form >
                    <FormInput type="text" name="email" label="email" value={this.state.email} handleChange={this.handleChange}/>
                    <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange}/>
                    <div className="buttons">
                        <Button label="Sign In" handleSubmit={this.handleSubmit}>Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn >{''}Sign In With Google{''}</Button>
                    </div>
                </form>
            </div>
        )   
    }
}
