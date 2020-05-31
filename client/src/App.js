import React from 'react';
import './App.css';
import {Body} from './Components/Body/Body';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import AddingPanel from './Components/ItemsAdding/ItemsAdding';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

function App(props) {
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
          </ul>
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
    </Switch>
    </Router>
  );
}

export default App;
