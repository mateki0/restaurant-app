import React, {useState,useEffect} from 'react';



export default function UserHeader(user){


  let itemsPrice = [];
  let hello = 'Guest';
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('cart')))
    if(user.user === null && JSON.parse(localStorage.getItem('cart')) === null){
      return cart;
    } else if (user.user !== null){
      setCart(user.user.local.cart)
    } else{
      setCart(JSON.parse(localStorage.getItem('cart')).items)
    }
  try{
  if(user.user === null){
    

   if(cart !== null && cart.length >0){
      itemsPrice = cart.map(a => parseFloat(a.price.slice(0, a.price.length - 1) * parseFloat(a.count)))
        if (itemsPrice.length > 1) {
          setPrice(itemsPrice.reduce((a, b) => a + b));
        } else {
          setPrice(itemsPrice[0])
          
        }
        
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
