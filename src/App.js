import React, {Component} from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Route, Redirect, Switch} from "react-router-dom"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSingUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"
import { auth, createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.actions"

class App extends Component {



  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
           this.props.setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
           })
        })
      }
     else {
        setCurrentUser(userAuth)
     } 
    })

  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {

  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSingUp/>)} />
      </Switch>

    </div>
  )
}
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
