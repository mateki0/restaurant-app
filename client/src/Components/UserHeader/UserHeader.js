import React, {useState,useEffect} from 'react';



export default function UserHeader(user){


  let itemsPrice = [];
  let hello = '';
  const [cart, setCart] = useState(user.user === null ? JSON.parse(localStorage.getItem('cart')).items : user.user.local.cart)
  const [price, setPrice] = useState(0)
  useEffect(() => {
    user.user === null ? setCart(JSON.parse(localStorage.getItem('cart')).items) : setCart(user.user.local.cart)
  
  try{
  if(user.user === null){
    console.log(cart)
  hello = 'Guest';

   if(cart !== null && cart.length >0){
      itemsPrice = cart.map(a => parseFloat(a.price.slice(0, a.price.length - 1) * parseFloat(a.count)))
        if (itemsPrice.length > 1) {
          setPrice(itemsPrice.reduce((a, b) => a + b));
        } else {
          setPrice(itemsPrice[0])
          
        }
        console.log(itemsPrice)
      return () => {
        
      };
 }
 
 


} else{
   let index = user.user.local.email.indexOf('@');
   hello = user.user.local.email.slice(0, index);
   if(hello.length>19){
     hello = hello.slice(0,16) + '...'
   }
   let userCart = user.user.local.cart;
   if(user.user.local.cart.length >0){
   setPrice(userCart.map(a=> parseFloat(a.price)).reduce((a,b)=>a+b))
 }
}
} catch(error) {
  console.log(error)
}
}, [])

return(
  <div className="price-div">
   <span className="userName">Hello, {hello}</span>
   <a href ="/cart" className="cart"><span className="price-href">{price}$</span></a>
   <div className="logout-div">
     {hello === 'Guest' ? (
       ''
     ) : (
       <form method='post' action='/logout'>
       <button className="logout-button" type="submit">Logout</button>
        </form>
     ) }
  </div>
</div>
)
}
