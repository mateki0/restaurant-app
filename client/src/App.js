import React , {useEffect, useState} from 'react';
import './App.css';
import {Body} from './Components/Body/Body';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import UserHeader from './Components/UserHeader/UserHeader';
import AddingPanel from './Components/ItemsAdding/ItemsAdding';

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import axios from 'axios';



const Header = (props) => (
    <div className="header">
          <ul>
            <li>
              <NavLink to='/' className="restaurant-name nav-link">My Test Restaurant</NavLink>
            </li>
            <li>
              <NavLink exact to='/' activeClassName="small-link-active" className="nav-link small-link">Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/about' activeClassName="small-link-active" className="nav-link small-link">About Us</NavLink>
            </li>
            <li>
              <NavLink exact to='/contact' activeClassName="small-link-active" className="nav-link small-link">Contact</NavLink>
            </li>
            <li>
              <NavLink exact to='/menu' activeClassName="small-link-active" className="nav-link small-link">Menu</NavLink>
            </li>
            <li>
              <NavLink exact to='/register' activeClassName="small-link-active" className="nav-link small-link">Register</NavLink>
            </li>
            
            <li>
            <NavLink exact to='/login' activeClassName="small-link-active" className="nav-link small-link">Login</NavLink>
            </li>
            
          </ul>
          <UserHeader price={props.price} user={props.user}/>
        </div>
);

const getCart = () => {
  return JSON.parse(window.localStorage.getItem('cart')).items
}

function useLocalStorage(value,action){
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const cart = JSON.parse(window.localStorage.getItem('cart'));
      
      return cart ? cart : {items:[]};
    } catch (error) {
      
      console.log(error)
    }
    
  });

  const setValue = (value,action) => {
    
    try {
      let cart = JSON.parse(window.localStorage.getItem('cart'));
      let item = cart.items.find(a=>a.item === value);
      
      
      if(action === 'increment'){
        item.count+=1;
      } ;
      if(action === 'decrement' && item.count > 1){
        console.log(item)
        item.count-=1
      };
      if(action === 'delete'){
        let index = cart.items.indexOf(item);
        cart.items.splice(index, 1);
      };
      window.localStorage.setItem('cart', JSON.stringify(cart));
      
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
function App(props) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([])
  const [busy, setBusy] = useState(false)
  const [price, setPrice] = useState(0)
  const [increment, setIncrement] = useLocalStorage(cart);
  useEffect(() => {

    const fetchData = async () => {
      
      const result = await axios('/user');
      
      setUser(result.data);
      
    }
    fetchData();
    
  }, []);
  useEffect(() => {
    if(user === null && JSON.parse(window.localStorage.getItem('cart')) !== undefined){
      
      setCart(JSON.parse(window.localStorage.getItem('cart')).items)
    }
    else if(user !== null){
      setCart(user.local)
    } 
  },[busy])
  const getPrice = () => {
  
    let itemsPrice = cart.map(a => parseFloat(a.price.slice(0, a.price.length - 1) * parseFloat(a.count)))
        if (itemsPrice.length > 1) {
          return itemsPrice.reduce((a, b) => a + b);
        } else {
          return itemsPrice[0];
        }
  }

    const handleChange = (data) => {
      setIncrement(data.value, data.action);
      const currentCart = getCart();
      setCart(currentCart);
      
    }

  
  useEffect(() => {
    const currentPrice = getPrice();
    setPrice(currentPrice)
  }, [cart]);


 
  return (
    <Router >
    <div className="App">
      <div className="nav-div">
        <Header user={user} price={price} ></Header>
      </div>


    </div>

    <Switch>
      <Route exact path='/'>
        <Body/>
        <Footer/>
      </Route>
      <Route exact path='/about'>
        <About/>
        <Footer/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
        <Footer/>
      </Route>
      <Route exact path="/menu">
        <Menu user={user}/>
        <Footer/>
      </Route>
      <Route exact path="/itemsAdding">
        <AddingPanel/>
      </Route>
      <Route exact path="/cart">
        <Cart price={price} cart={cart} handleChange={handleChange} />
        <Footer/>
      </Route>
      <Route exact path="/login">
        <Login/>
        <Footer/>
      </Route>
      <Route exact path="/register">
        <Register/>
        <Footer/>
      </Route>
    </Switch>

    </Router>
  );
 
  
}

export default App;
