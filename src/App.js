import React from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Route, Link, Switch} from "react-router-dom"

const HatsPage = () => {
return (
  <div className="">
    HATS
  </div>
)
}

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop/hats" component={HatsPage}/>
      </Switch>

    </div>
  );
}

export default App;
