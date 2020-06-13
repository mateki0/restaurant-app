import React, { useEffect, useState, useRef, useCallback } from 'react';
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

// const useStorage = (storageName) => {
//   const checkStorage = key => {
//     const storedData = localStorage.getItem(key);
//     if(!storedData) 
//   }
//   useEffect(()=>{
//     checkStorage(storageName)
//     const handler = ({key}) => checkStorage(key);
//     window.addEventListener('storage', handler);
//     return () => window.removeEventListener('storage', handler)
//   })
// }



const SingleItem = (props) => (
  <div className="single-cart-item">
    <div>
      <span>{props.item.item}</span>
    </div>
    <div>
      <button value={props.item.item} onClick={props.incrementItem}>+</button>
      <span>{props.item.count}</span>
      <button onClick={e => e.currentTarget.previousSibling.value > 1 ? e.currentTarget.previousSibling.value-- : null}>-</button>

      <span className="price-span">{props.item.price.slice(0, props.item.price.length - 1) * props.item.count}$</span>
    </div>
  </div>
);


function ItemList(user) {
  
  
  const [cart, setCart] = useState([])
  
  
  console.log(cart)
  const [unique, setUnique] = useState([]);
  const [price, setPrice] = useState(0)

  
  let arr = [];
  let counter = 1;
  useEffect(() => {
    if(user.user.user === null && JSON.parse(localStorage.getItem('cart')) === null){
      return cart;
    } else if (user.user.user !== null){
      setCart(user.user.user.local.cart)
    } else{
      setCart(JSON.parse(localStorage.getItem('cart')).items)
    }
  }, [])
  
  function compare(a, b) {
    const itemA = a.item.toUpperCase();
    const itemB = b.item.toUpperCase();
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }
  let itemsPrice = [];
  

useEffect(() => {
  itemsPrice = cart.map(a => parseFloat(a.price.slice(0, a.price.length - 1) * parseFloat(a.count)))
    if (itemsPrice.length > 1) {
      setPrice(itemsPrice.reduce((a, b) => a + b));
    } else {
      setPrice(itemsPrice[0])
      
    }
    console.log(itemsPrice)
  return () => {
    
  };
}, []);

  const incrementItem = e => {
    const item = unique.find(a => a.item === e.currentTarget.value)
    item.count+=1
    setUnique(unique)
    console.log(item)
    console.log(unique)
    // let obj = {}

    // cart.map(a => {
    //   if (a.item === e.currentTarget.value) {
    //     obj.item = a.item;
    //     obj.price = a.price;
    //     obj.count = a.count
    //   }
    // })
    // e.currentTarget.nextSibling.innerText = parseInt(e.currentTarget.nextSibling.innerText) + 1
    // cart.push(obj)
    
    // getUniques()
    
    // localStorage.setItem('cart', JSON.stringify({ items: cart }))
    // setCart(unique);
    
    //window.location.href =""
  }


  return (
    <div className="items-container">
      {cart.map(item =>

        <SingleItem key={item.item} incrementItem={incrementItem} item={item}></SingleItem>

      )}


      <div className="price"><span>Total: {price}$</span></div>

    </div>
  )
}

export default function Cart(user) {
  
  return (
    <main>
      <Title />
      <ItemList user={user}/>
    </main>
  )
}
