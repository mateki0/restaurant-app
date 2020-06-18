import React, { useState, useEffect, useRef} from 'react';
import './menu.css';
import axios from 'axios';
import { Animated } from 'react-animated-css';
import Title from '../Title';

function useLocalStorage(value){
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const cart = JSON.parse(window.localStorage.getItem('cart'));
      
      return cart ? cart : {items:[]};
    } catch (error) {
      
      return ''
    }
    
  });

  const setValue = value => {
    
    try {
      let cart = JSON.parse(window.localStorage.getItem('cart'));
      
      let item = cart.items.find(a=>a.item === value.item);
      
      if(item){
        
        item.count+=1;
        window.localStorage.setItem('cart', JSON.stringify(cart));
      } else{
        
        const valueToStore =
        value instanceof Function ? value(storedValue.items.push(value)) : cart.items.push(value);
        setStoredValue(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }
    } catch (error) {
      
    }
  }
  return [storedValue, setValue]
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

const SingleMealItem = (props) => (
  <div className="meals-list">
    {props.data.map(a => <div key={a.name} className="single-item">
      <div className="meal-description-div">
        <h4 className="meal-description">{a.name}</h4>
        <span>{a.description}</span>
      </div>
      <div>
        <h4 className="meal-price-h4">{a.price}</h4>

        <form method="post" action="/menu">
          <input type="hidden" value={a.name} name="name" className="name" />
          <input type="hidden" value={a.price} name="price" className="price" />
          {isEmpty(props.user) ? <button className="add-button" type='button' onClick={e => {props.setCart(
            {item:e.currentTarget.value,
              price:e.currentTarget.previousSibling.value,
              count:1
            }); props.toggleCart() }} 
            value={a.name}>Add to cart</button> : <button className="add-button" type='submit' value={a.name}>Add to cart</button>}
        </form>
      </div>
    </div>)}
  </div>
);



function Meal({data, user, toggleCart}) {
  
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [cart, setCart] = useLocalStorage();
  
  
  useEffect(() => {
    if (!window.localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify({ items: [] }))
    }
  }, [])

    
    
  function hideMe() {
    if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 650)
    } else {
      setFading(false);
      setTimeout(() => setVisible(true), 250)
    }
  }
  return (
    <div>

      <div className="menu-container menu-meals">
        <div className="meals-expand" onClick={hideMe}>
          <h2>Meals</h2>
        </div>
        <Animated
          animationIn='fadeIn'
          animationOut="fadeOut"
          isVisible={!fading}
          style={visible ? { display: "grid" } : { display: "none" }}>
          <SingleMealItem data={data} user={user} setCart={setCart} toggleCart={toggleCart} ></SingleMealItem>
        </Animated>
      </div>
    </div>
  )

}
function Drinks({data, user, toggleCart}) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [cart, setCart] = useLocalStorage('cart', { items: [] })

  function hideMe() {
    if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 650)
    } else {
      setFading(false);
      setTimeout(() => setVisible(true), 250)
    }
  }
  
  return (
    <div className="menu-container drinks">
      <div className="meals-expand" onClick={hideMe}>
        <h2>Drinks</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? { display: "grid" } : { display: "none" }}>
        <SingleMealItem data={data} user={user} setCart={setCart} toggleCart={toggleCart}></SingleMealItem>
      </Animated>
    </div>
  )
}
function Dessers({data, user, toggleCart}) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [cart, setCart] = useLocalStorage('cart', { items: [] })


  function hideMe() {
    if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 650)
    } else {
      setFading(false);
      setTimeout(() => setVisible(true), 250)
    }
  }

  return (
    <div className="menu-container dessers">

      <div className="meals-expand" onClick={hideMe}>
        <h2>Dessers</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? { display: "grid" } : { display: "none" }}>
        <SingleMealItem data={data} user={user} setCart={setCart} toggleCart={toggleCart}></SingleMealItem>
      </Animated>
    </div>
  )
}

function Menu({user,toggle,toggleCart}) {
  const [items, setItems] = useState([]);
  const _isMounted = useRef(true);
  
  useEffect(() => {
    const fetchData = async () => {
      if (_isMounted.current) {
        const result = await axios('/items');
        setItems(result.data)
      }
    }
    fetchData();
    return () => {
      _isMounted.current = false;
    }
  }, [])

  const meals = items.filter(a => { return a.type === 'Meal' })
  const drinks = items.filter(a => { return a.type === 'Drink' })
  const dessers = items.filter(a => { return a.type === 'Desser' })
  return (
    <>
      {!items.length ? (<div>Loading...</div>) : (
        <main>
          <Title value="Checkout our menu below"/>

          <Meal data={meals} user={user} toggleCart={toggleCart}/>
          <Drinks data={drinks} user={user} toggleCart={toggleCart}/>
          <Dessers data={dessers} user={user} toggleCart={toggleCart}/>

        </main>
      )}
    </>
  )
}
export default Menu
