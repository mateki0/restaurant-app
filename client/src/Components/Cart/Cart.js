import React, {useState, useEffect} from 'react';
import './cart.css';


function Title() {

  return (
    <div className="menu-container">
      <div className="title-container">
        <h2>Your cart:</h2>
      </div>
    </div>
  )
}



const SingleLocalItem = (props) => (
  <div className="single-cart-item">
    <div>
      <span>{props.item.item}</span>
    </div>
    <div className="price-count-container">
      <div className="count-div">
        <button value={props.item.item} onClick={e=>props.incrementItem({value:e.currentTarget.value,action:'increment'})}>+</button>
        <span>{props.item.count}</span>
        <button value={props.item.item} onClick={e=>props.incrementItem({value:e.currentTarget.value,action:'decrement'})}>-</button>
      </div>
      <div className="price-div">
        <span className="price-span">{props.item.price.slice(0, props.item.price.length - 1) * props.item.count}$</span>
      </div>
      <div>
        <button value={props.item.item} type="button" onClick={e=>props.incrementItem({value:e.currentTarget.value,action:'delete'})}>Remove</button>
      </div>
    </div>
  </div>
);
const SingleUserItem = (props) => (
  <div className="single-cart-item">
    <div>
      <span>{props.item.item}</span>
    </div>
    
      <div className="price-count-container">
        <div className="count-user-div">
          <form className="single-user-form" action="/increment" method="post">
            <button id="work" name="increment" value={props.item.item} >+</button>
            <span>{props.item.count}</span>
          </form>
          <form className="single-user-form" action="/decrement" method="post">
            <button value={props.item.item} name="decrement">-</button>
          </form>
        </div>
        <div className="price-div">
          <span className="price-span">{props.item.price.slice(0, props.item.price.length - 1) * props.item.count}$</span>
        </div>
        <form  className="single-user-form" action="/delete" method="post">
          <button value={props.item.item}  name="delete">Remove</button>
        </form>
    
      </div>
    
  </div>
);

function ItemList({user, localCart, userCart, handleChange, price ,isLogged}) {
    
  
    console.log(userCart)
    console.log(localCart)
  return (
    <div className="items-container">
      {isLogged && userCart !== [] ? 
      userCart.cart.map(item =>

        <SingleUserItem key={item.item} incrementItem={handleChange} item={item} ></SingleUserItem>

      ) : localCart.map(item =>

        <SingleLocalItem key={item.item} incrementItem={handleChange} item={item} ></SingleLocalItem>

      ) 
      }
  
      <div className="price"><span>Total: {price}$</span></div>

    </div>
  )
}


export default function Cart({user, localCart, userCart, handleChange, price ,isLogged}) {
  
  return (
    <main>
      <Title />
      <ItemList user={user} localCart={localCart} userCart={userCart} handleChange={handleChange} price={price} isLogged={isLogged}/>
    </main>
  )
}
