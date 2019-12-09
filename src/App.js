import React, {Component} from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSingUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"
import { auth, createUserProfileDocument} from "./firebase/firebase.utils"


class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id, 
              ...snapShot.data()
            }
          })
        })
      }
     else {
      this.setState({
        currentUser: userAuth
      })
     } 
    })

  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {
console.log(this.state.currentUser);
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSingUp}/>
      </Switch>

    </div>
  )
}
}

export default App;
