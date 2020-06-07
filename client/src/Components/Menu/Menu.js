import React, {useState, useEffect, useRef} from 'react';
import './menu.css';
import axios from 'axios';
import {Animated} from 'react-animated-css';

function MenuTitle(){

  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Checkout our menu below</h2>
      </div>

    </div>
  )
}
function Meal(data){
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [user, setUser] = useState({});

  let cart = {items:[]}
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  }, [user]);

  function hideMe(){
    if(visible){
    setFading(true);
    setTimeout(() => setVisible(false), 650)
  } else{
    setFading(false);
    setTimeout(() => setVisible(true), 250)
  }
  }
  function addToCart(e){

    const currentSibling = e.currentTarget.previousSibling.value;

    let obj = {
      item: e.currentTarget.value,
      price:currentSibling,
      count:1
    }

    if(user.local === null || user.local === undefined){
    let itemsFromStorage = JSON.parse(localStorage.getItem('cart'));
    if(JSON.parse(localStorage.getItem('cart')) === null){
      cart.items.push(obj)
      localStorage.setItem('cart', JSON.stringify(cart));
    } else{

      itemsFromStorage.items.push(obj);
      localStorage.setItem('cart', JSON.stringify(itemsFromStorage));
    }
  // window.location.href = ''
}
}


  return(

    <div className="menu-container menu-meals">
      <div className="meals-expand" onClick={hideMe}>
        <h2>Meals</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? {display: "grid"} : {display: "none"}}>
      <div className="meals-list" >
        {data.data.map(a=>
        <div key={a.name} className="single-item">
          <div>
            <h4>{a.name}</h4>
          <span>{a.description}</span>
          </div>
          <div>
            <h4>{a.price}</h4>

          <form method="post" action="/menu">
              <input type="hidden" value={a.name} name="name" className="name"/>
            <input type="hidden" value={a.price} name="price" className="price"/>
          <button className="add-button" type={user.local === undefined ? 'button' : 'submit'} onClick={addToCart} value={a.name}>Add to cart</button>
            </form>
          </div>
        </div>
        )}
      </div>
      </Animated>
    </div>

)

}
function Drinks(data){
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [user, setUser] = useState({});

  let cart = {items:[]}
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  }, [user]);

  function hideMe(){
    if(visible){
    setFading(true);
    setTimeout(() => setVisible(false), 650)
  } else{
    setFading(false);
    setTimeout(() => setVisible(true), 250)
  }
  }
  function addToCart(e){

    const currentSibling = e.currentTarget.previousSibling.value;

    let obj = {
      item: e.currentTarget.value,
      price:currentSibling,
      count:1
    }

    if(user.local === null || user.local === undefined){
    let itemsFromStorage = JSON.parse(localStorage.getItem('cart'));
    if(JSON.parse(localStorage.getItem('cart')) === null){
      cart.items.push(obj)
      localStorage.setItem('cart', JSON.stringify(cart));
    } else{

      itemsFromStorage.items.push(obj);
      localStorage.setItem('cart', JSON.stringify(itemsFromStorage));
    }
  // window.location.href = ''
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
        style={visible ? {display: "grid"} : {display: "none"}}>
      <div className="meals-list">
        {data.data.map(a=>
        <div key={a.name} className="single-item">
          <div>
            <h4>{a.name}</h4>
          <span>{a.description}</span>
          </div>
          <div>
            <h4>{a.price}</h4>
            <button type={user.local === undefined ? 'button' : 'submit'} onClick={addToCart} value={a.name} className="add-button">Add to cart</button>
          </div>
        </div>
        )}
      </div>
    </Animated>
    </div>
  )
}
function Dessers(data){
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [user, setUser] = useState({});

  let cart = {items:[]}
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  }, [user]);

  function hideMe(){
    if(visible){
    setFading(true);
    setTimeout(() => setVisible(false), 650)
  } else{
    setFading(false);
    setTimeout(() => setVisible(true), 250)
  }
  }
  function addToCart(e){

    const currentSibling = e.currentTarget.previousSibling.value;

    let obj = {
      item: e.currentTarget.value,
      price:currentSibling,
      count:1
    }

    if(user.local === null || user.local === undefined){
    let itemsFromStorage = JSON.parse(localStorage.getItem('cart'));
    if(JSON.parse(localStorage.getItem('cart')) === null){
      cart.items.push(obj)
      localStorage.setItem('cart', JSON.stringify(cart));
    } else{

      itemsFromStorage.items.push(obj);
      localStorage.setItem('cart', JSON.stringify(itemsFromStorage));
    }
  // window.location.href = ''
}
}
  return (
    <div className="menu-container dessers">

      <div  className="meals-expand" onClick={hideMe}>
        <h2>Dessers</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? {display: "grid"} : {display: "none"}}>
      <div  className="meals-list" >
        { data.data.map(a=>
        <div key={a.name} className="single-item">
          <div>
            <h4>{a.name}</h4>
          <span>{a.description}</span>
          </div>
          <div>
            <h4>{a.price}</h4>
          <button type={user.local === undefined ? 'button' : 'submit'} onClick={addToCart} value={a.name} className="add-button">Add to cart</button>
          </div>
        </div>
       )}
      </div>
    </Animated>
    </div>
  )
}

function Menu(){
  const [items, setItems] = useState([]);
  const _isMounted = useRef(true);
  const [hide, setHide] = useState(null)
  const [fading, setFading] = useState(false);
  useEffect(() => {
   const fetchData = async () => {
     if(_isMounted.current){
     const result = await axios('/items');
     setItems(result.data)
   }
   }
   fetchData();
   return () => {
     _isMounted.current = false;
   }
 }, [])

  const meals = items.filter(a=>{return a.type=== 'Meal'})
  const drinks = items.filter(a=>{return a.type=== 'Drink'})
  const dessers = items.filter(a=>{return a.type=== 'Desser'})
  return(
    <>
    {!items.length ? (<div>Loading...</div>) : (
    <main>
      <MenuTitle/>

    <Meal data={meals} />
    <Drinks data={drinks} />
    <Dessers data={dessers} />

</main>
  )}
</>
  )
}
export default Menu
