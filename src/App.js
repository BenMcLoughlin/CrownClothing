import React from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;
