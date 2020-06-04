import React, {useState, useEffect, useRef} from 'react';
import './menu.css';
import {CSSTransitionGroup} from 'react-transition-group';
import axios from 'axios'

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
  const [expanded, expandMeal] = useState(true);
  const [user, setUser] = useState({});
  const active = {display:'grid'};
  const nonActive = {display:'none'};
  let cart = {items:[]}
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  }, [user]);

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
      <div className="meals-expand" onClick={()=> expanded === false ? expandMeal(true) : expandMeal(false) }>
        <h2>Meals</h2>
      </div>
      <CSSTransitionGroup
        transitionName="menu"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}

        >
      <div key={expanded} className="meals-list" style={expanded === true ? active : nonActive}>
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
          <button type={user.local === undefined ? 'button' : 'submit'} onClick={addToCart} value={a.name}>Add to cart</button>
            </form>
          </div>
        </div>
        )}
      </div>
      </CSSTransitionGroup>
    </div>

)

}
function Drinks(data){
  const [expanded, expandMeal] = useState(false);
  const active = {display:'grid'};
  const nonActive = {display:'none'};
  return (
    <div className="menu-container drinks">
      <div className="meals-expand" onClick={()=> expanded === false ? expandMeal(true) : expandMeal(false) }>
        <h2>Drinks</h2>
      </div>
      <CSSTransitionGroup
        transitionName="menu"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}

        >
      <div key={expanded} className="meals-list" style={expanded === true ? active : nonActive}>
        {data.data.map(a=>
        <div key={a.name} className="single-item">
          <div>
            <h4>{a.name}</h4>
          <span>{a.description}</span>
          </div>
          <div>
            <h4>{a.price}</h4>
            <button type="button">Add to cart</button>
          </div>
        </div>
        )}
      </div>
    </CSSTransitionGroup>
    </div>
  )
}
function Dessers(data){
  const [expanded, expandMeal] = useState(false);
  const active = {display:'grid'};
  const nonActive = {display:'none'};
  return (
    <div className="menu-container dessers">

      <div  className="meals-expand" onClick={()=> expanded === false ? expandMeal(true) : expandMeal(false) }>
        <h2>Dessers</h2>
      </div>
      <CSSTransitionGroup
        transitionName="menu"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}

        >
      <div key={expanded} className="meals-list" style={expanded === true ? active : nonActive}>
        { data.data.map(a=>
        <div key={a.name} className="single-item">
          <div>
            <h4>{a.name}</h4>
          <span>{a.description}</span>
          </div>
          <div>
            <h4>{a.price}</h4>
            <button type="button">Add to cart</button>
          </div>
        </div>
       )}
      </div>
    </CSSTransitionGroup>
    </div>
  )
}
function Menu(){
  const [items, setItems] = useState([]);
  const _isMounted = useRef(true)
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

    <Meal data={meals}/>
    <Drinks data={drinks}/>
    <Dessers data={dessers}/>

</main>
  )}
</>
  )
}
export default Menu
