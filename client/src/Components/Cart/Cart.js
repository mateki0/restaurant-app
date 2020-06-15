import React from 'react';
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



const SingleItem = (props) => (
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


function ItemList({cart, handleChange, price}) {
 
  
  
    
  return (
    <div className="items-container">
      {
      cart.map(item =>

        <SingleItem key={item.item} incrementItem={handleChange} item={item} ></SingleItem>

      ) 
      }
  
      <div className="price"><span>Total: {price}$</span></div>

    </div>
  )
}


export default function Cart({cart, handleChange, price}) {
  
  return (
    <main>
      <Title />
      <ItemList cart={cart} handleChange={handleChange} price={price}/>
    </main>
  )
}
