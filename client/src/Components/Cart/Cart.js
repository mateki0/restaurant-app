import React from 'react';
import './cart.css';

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
  const copyCart = JSON.parse(localStorage.getItem('cart'))

  let itemsPrice = copyCart.items.map((a) =>{
    return parseFloat(a.price);
 }
 );
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
 let arr = [];
 let unique = [];
 let counter = 1;
 copyCart.items.sort(compare);
 for(let i=0; i<copyCart.items.length; i++){
   if(i+1 < copyCart.items.length){
     if(copyCart.items[i].item === copyCart.items[i+1].item){
       counter++;
     } else{
       unique.push(copyCart.items[i]);
       arr.push(counter);
       counter = 1;
     }
   } else{
     unique.push(copyCart.items[i]);
     arr.push(1);
   }
}
  for(let j=0; j<unique.length; j++){
    unique[j].count = arr[j];
  }
 let price = itemsPrice.reduce((a,b) => a+b);
  return(
    <div className="items-container">
      {unique.map(item =>

        <div key={item.item} className="single-cart-item">
          <div>
            <span>{item.item} x {item.count}</span>
          </div>
          <div>
            <span>{item.price * item.count}$</span>
          </div>
        </div>

      )}
      <div className="price"><span>Total: {price}$</span></div>
    </div>
  )
}
export default function Cart(){
  return(
    <div>
      <Title/>
      <ItemList/>
    </div>
  )
}
