import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import CardDetails from './components/CardDetails';
import PlaceOrder from './components/PlaceOrder';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
// import { BrowserRouter, Route } from 'react-router-dom'

function App(){

  return(
    <Router>
      <NavBar/>
      <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/cardDetails" exact component={CardDetails}/>
      <Route path="/signup" exact component={SignUp}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path="/checkout" exact component={Checkout}/>
      <Route path="/placeorder" exact component={PlaceOrder}/>
      </Switch>
    </Router>
  )
  
}

export default App;
