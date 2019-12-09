import React, { Component } from 'react'
import FormInput from "../form-input/form-input.component"
import "./sign-up-styles.scss"
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"
import Button from "../custom-button/custom-button.component"

export default class SignUp extends Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSumbit = async (e) => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {alert("passwords don't match") 
        return;
    }
        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
        }
        catch(error) {
            console.log(error);
        }

    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
            console.log(this.state);
        return (
            <div className = "sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form action="" className="sign-up-form">
                <FormInput 
                        type="text" 
                        name = "displayName" 
                        value={displayName} 
                        onChange={(e) => this.handleChange(e)}
                        label='Display Name'
                        required            
                        />
                <FormInput 
                        type="email" 
                        name = "email" 
                        value={email} 
                        onChange={(e) => this.handleChange(e)}
                        label='Display Name'
                        required            
                        />
                <FormInput 
                        type="passwerd" 
                        name = "password" 
                        value={password} 
                        onChange={(e) => this.handleChange(e)}
                        label='Password'
                        required            
                        />
                <FormInput 
                        type="password" 
                        name = "confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => this.handleChange(e)}
                        label='Confirm Password'
                        required            
                        />
                     <Button type={"submit"} label="Sign Up" handleSubmit={this.handleSubmit}>Sign Up</Button>
                </form>
            </div>
        )
    }
}
