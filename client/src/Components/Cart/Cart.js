import React, {useState, useEffect,useRef} from 'react';
import './cart.css';
import axios from 'axios'

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
            <button  value={props.item.item} onClick={e=>props.updateCart({value:e.currentTarget.value,action:'increment'})}>+</button>
            <span>{props.item.count}</span>
            <button value={props.item.item} name="decrement">-</button>
        </div>
        <div className="price-div">
          <span className="price-span">{props.item.price.slice(0, props.item.price.length - 1) * props.item.count}$</span>
        </div>
        <div >
          <button value={props.item.item}  name="delete">Remove</button>
        </div>
    
      </div>
    
  </div>
);


function ItemList({user, localCart, userCart, handleChange, price ,isLogged, updateCart, toggle, toggleCart}) {
  console.log(userCart)
  const isMounted = useRef(true)
  const submitChanges = (data) => {
    console.log(userCart)
    axios('/update', {
      method: "POST",
      data: data
    }).then((response)=>{
      return response.json()
    }).catch ((err)=>{
      console.error(err.message)
    }) 
  
  } 

  useEffect(() => {
    console.log('asd')
    
    if(!isMounted.current) return;
  
    return () => {
    
      submitChanges(userCart);
      isMounted.current = false;
      
      
      
    }
  }, [userCart])
    
  return (
    <div className="items-container">
      {isLogged && userCart !== [] ? 
      userCart.map(item =>

        <SingleUserItem key={item.item} updateCart={updateCart} item={item} ></SingleUserItem>

      ) : localCart.map(item =>

        <SingleLocalItem key={item.item} incrementItem={handleChange} item={item} ></SingleLocalItem>

      ) 
      }
  
      <div className="price"><span>Total: {price}$</span></div>

    </div>
  )
}


export default function Cart({user, localCart, userCart, handleChange, price ,isLogged, updateCart, toggle, toggleCart}) {
  
  return (
    <main>
      <Title />
      <ItemList user={user} localCart={localCart} userCart={userCart} handleChange={handleChange} price={price} isLogged={isLogged} updateCart={updateCart} toggle={toggle} toggleCart={toggleCart}/>
    </main>
  )
}
