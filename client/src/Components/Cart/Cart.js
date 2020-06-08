import React, {useEffect, useState} from 'react';
import './cart.css';
import axios from 'axios';
function Title(){

  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Your cart:</h2>
      </div>
    </div>
  )
}
function ItemList(){
  const [user, setUser] = useState({});
  let arr = [];
  let counter = 1;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data);

    }
    fetchData();

  }, []);

  function compare(a,b){
    const itemA = a.item.toUpperCase();
    const itemB = b.item.toUpperCase();
    let comparison = 0;
    if(itemA>itemB){
      comparison = 1;
    } else if (itemA < itemB){
      comparison = -1;
    }
    return comparison;
  }

    let cart =[];
    let unique =[];
    let price = 0;
    let itemsPrice = [];
    console.log(user.local)
    if(user.local === null || user.local === undefined){
      if(JSON.parse(localStorage.getItem('cart')) !== null)
      cart = JSON.parse(localStorage.getItem('cart')).items
    } else{
      cart = user.local.cart
    }
    console.log(cart)
    itemsPrice = cart.map((a) =>{
      console.log(parseFloat(a.price.slice(0,a.price.length-1)))
      return parseFloat(a.price.slice(0,a.price.length-1));
     });
     console.log(itemsPrice)
     cart.sort(compare);

     for(let i=0; i<cart.length; i++){
       if(i+1 < cart.length){
         if(cart[i].item === cart[i+1].item){
           counter++;
         } else{
           unique.push(cart[i]);
           arr.push(counter);
           counter = 1;
         }
       } else{
         unique.push(cart[i]);
         arr.push(1);
        }
      }
      for(let j=0; j<unique.length; j++){
        unique[j].count = arr[j];
      }
      if(itemsPrice.length>1){
        price = itemsPrice.reduce((a,b) => a+b);
      } else{
        price = itemsPrice[0]
      }




  return(
    <div className="items-container">
      {unique.map(item =>

        <div key={item.item} className="single-cart-item">
          <div>
            <span>{item.item} x {item.count}</span>
          </div>
          <div>
            <span>{item.price.slice(0,item.price.length-1) * item.count}$</span>
          </div>
        </div>

      )}
      <div className="price"><span>Total: {price}$</span></div>
    </div>
  )
}
export default function Cart(){
  return(
    <main>
      <Title/>
      <ItemList/>
  </main>
  )
}
