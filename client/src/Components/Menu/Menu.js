import React, { useState, useEffect, useRef } from 'react';
import './menu.css';
import axios from 'axios';
import { Animated } from 'react-animated-css';

function MenuTitle() {

  return (
    <div className="menu-container">
      <div className="title-container">
        <h2>Checkout our menu below</h2>
      </div>

    </div>
  )
}



function useLocalStorage(value){
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const cart = JSON.parse(window.localStorage.getItem('cart'));
      
      return cart ? cart : {items:[]};
    } catch (error) {
      console.log(error);
      return ''
    }
    
  });

  const setValue = value => {
    console.log(storedValue)
    try {
      let cart = JSON.parse(window.localStorage.getItem('cart'));
      console.log(value.item)
      let item = cart.items.find(a=>a.item === value.item);
      console.log(item)
      if(item){
        console.log('asd')
        item.count+=1;
        window.localStorage.setItem('cart', JSON.stringify(cart));
      } else{
        console.log(value)
        const valueToStore =
        value instanceof Function ? value(storedValue.items.push(value)) : cart.items.push(value);
        setStoredValue(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }
      //setStoredValue(item);
      //window.localStorage.setItem('cart', JSON.stringify(item));
      //window.location.href = ''
    } catch (error) {
      console.log(error)
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
          {isEmpty(props.user) ? <button className="add-button" type='button' onClick={e => props.setCart(
            {item:e.currentTarget.value,
              price:e.currentTarget.previousSibling.value,
              count:1
            })} 
            value={a.name}>Add to cart</button> : <button className="add-button" type='submit' value={a.name}>Add to cart</button>}
        </form>
      </div>
    </div>)}
  </div>
);


function Meal(data, user) {
  
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [cart, setCart] = useLocalStorage();

  useEffect(() => {
    if (!window.localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify({ items: [] }))
    }
  }, [])

  console.log(localStorage.cart)
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

    <div className="menu-container menu-meals">
      <div className="meals-expand" onClick={hideMe}>
        <h2>Meals</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? { display: "grid" } : { display: "none" }}>
        <SingleMealItem data={data.data} user={user} setCart={setCart}></SingleMealItem>
      </Animated>
    </div>

  )

}
function Drinks(data, user) {
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
        <SingleMealItem data={data.data} user={user} setCart={setCart}></SingleMealItem>
      </Animated>
    </div>
  )
}
function Dessers(data, user) {
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
        <SingleMealItem data={data.data} user={user} setCart={setCart}></SingleMealItem>
      </Animated>
    </div>
  )
}

function Menu(user) {
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
          <MenuTitle />

          <Meal data={meals} user={user} />
          <Drinks data={drinks} user={user} />
          <Dessers data={dessers} user={user} />

        </main>
      )}
    </>
  )
}
export default Menu
