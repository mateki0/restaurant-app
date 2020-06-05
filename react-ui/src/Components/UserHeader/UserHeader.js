import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function UserHeader(){
  const [user, setUser] = useState({});
  let totalPrice = 0;
  let hello = '';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  },[])
  if(user.local === null || user.local === undefined){
  const copyCart = JSON.parse(localStorage.getItem('cart'))

  if(copyCart){
  let itemsPrice = copyCart.items.map((a) =>{
    return parseFloat(a.price);
 }
 );

 totalPrice = itemsPrice.reduce((a,b) => a+b);
 hello = 'Guest';
}
} else{
   let index = user.local.email.indexOf('@');
   hello = user.local.email.slice(0, index);
   let userCart = user.local.cart;
   if(user.local.cart.length >0){
   totalPrice = userCart.map(a=> parseFloat(a.price)).reduce((a,b)=>a+b)
 }
}
return(
  <div className="price-div">
   <a href ="/cart" className="cart"><span className="price-href">{totalPrice}$</span></a>
   <span className="userName">Hello, {hello}</span>
   <div className="logout-div">
   <form method="post" action={hello === 'Guest' ? '/login' : '/logout'}>
   <button className="logout-button" type="submit">{hello === 'Guest' ? 'Login' : 'Logout'}</button>
  </form>
   </div>
  </div>
)
}
