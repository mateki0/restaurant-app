import React from 'react';
import './App.css';
import {Body} from './Components/Body/Body';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';
import AddingPanel from './Components/ItemsAdding/ItemsAdding';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

function App(props) {
  const copyCart = JSON.parse(localStorage.getItem('cart'))
  let totalPrice;
  if(copyCart){
  let itemsPrice = copyCart.items.map((a) =>{
    return parseFloat(a.price);
 }
 );

 totalPrice = itemsPrice.reduce((a,b) => a+b)
}
  return (
    <Router>
    <div className="App">
      <div className="nav-div">
        <div className="header">
          <ul>
            <li>
              <NavLink to='/'  className="restaurant-name nav-link">My Test Restaurant</NavLink>
            </li>
            <li>
              <NavLink exact to='/' activeClassName="small-link-active" className="nav-link small-link" >Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/about' activeClassName="small-link-active" className="nav-link small-link" >About Us</NavLink>
            </li>
            <li>
              <NavLink exact to='/contact' activeClassName="small-link-active" className="nav-link small-link" >Contact</NavLink>
            </li>
            <li>
              <NavLink exact to='/menu' activeClassName="small-link-active" className="nav-link small-link" >Menu</NavLink>
            </li>
            <li>
              <NavLink exact to='/login' activeClassName="small-link-active" className="nav-link small-link" >Sign in</NavLink>
            </li>
            <li>
              <NavLink exact to='/register' activeClassName="small-link-active" className="nav-link small-link" >Register</NavLink>
            </li>
          </ul>
          <div className="price-div">
           <a href ="/cart" className="cart"><span className="price-href">{totalPrice}$</span></a>
          </div>
        </div>
      </div>


    </div>
    <Switch>
      <Route exact path='/'>
        <Body/>
        <Footer/>
      </Route>
      <Route path='/about'>
        <About/>
        <Footer/>
      </Route>
      <Route path='/contact'>
        <Contact/>
        <Footer/>
      </Route>
      <Route path="/menu">
        <Menu/>
        <Footer/>
      </Route>
      <Route path="/itemsAdding">
        <AddingPanel/>
      </Route>
      <Route path="/cart">
        <Cart/>
        <Footer/>
      </Route>
      <Route path="/login">

        <Footer/>
      </Route>
      <Route path="/register">
        <Register/>
        <Footer/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
