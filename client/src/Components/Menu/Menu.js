import React, {useState, useEffect, useRef} from 'react';
import './menu.css';
import axios from 'axios';
import {Animated} from 'react-animated-css';
function MenuTitle(){

  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Checkout our menu below</h2>
      </div>

    </div>
  )
}

function useLocalStorage(key, initialValue){
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error){
      console.log(error);
      return initialValue
    }
  });

  const setValue = value => {
    try {
      let item = JSON.parse(window.localStorage.getItem('cart'));
      const valueToStore =
      value instanceof Function ? value(storedValue.items.push(value)) : item.items.push(value);
      setStoredValue(item);
      window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

function Meal(data){
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [cart, setCart] = useLocalStorage('cart', {items:[]})
  useEffect(()=>{
    if(!window.localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify({items:[]}))
  }
}, [])

  function hideMe(){
    if(visible){
    setFading(true);
    setTimeout(() => setVisible(false), 650)
  } else{
    setFading(false);
    setTimeout(() => setVisible(true), 250)
  }
  }

  return(

    <div className="menu-container menu-meals">
      <div className="meals-expand" onClick={hideMe}>
        <h2>Meals</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? {display: "grid"} : {display: "none"}}>
      <div className="meals-list" >
        {data.data.map(a=>
        <div key={a.name} className="single-item">
          <div className="meal-description-div">
            <h4 className="meal-description">{a.name}</h4>
          <span>{a.description}</span>
          </div>
          <div>
            <h4 className="meal-price-h4">{a.price}</h4>

          <form method="post" action="/menu">
              <input type="hidden" value={a.name} name="name" className="name"/>
            <input type="hidden" value={a.price} name="price" className="price"/>
          <button className="add-button" type='button'
            onClick={e=>setCart(
              {
                item: e.currentTarget.value,
                price:e.currentTarget.previousSibling.value,
                count:1
              }
            )}
            value={a.name}>Add to cart</button>
            </form>
          </div>
        </div>
        )}
      </div>
      </Animated>
    </div>

)

}
function Drinks(data){
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [user, setUser] = useState({});
  const [cart, setCart] = useLocalStorage('cart', {items:[]})
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  }, [user]);

  function hideMe(){
    if(visible){
    setFading(true);
    setTimeout(() => setVisible(false), 650)
  } else{
    setFading(false);
    setTimeout(() => setVisible(true), 250)
  }
  }

  return (
    <div className="menu-container drinks">
      <div className="meals-expand" onClick={hideMe}>
        <h2>Drinks</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? {display: "grid"} : {display: "none"}}>
      <div className="meals-list">
        {data.data.map(a=>
        <div key={a.name} className="single-item">
          <div className="meal-description-div">
            <h4 className="meal-description">{a.name}</h4>
            <span>{a.description}</span>
          </div>
          <div>
            <h4 className="meal-price-h4">{a.price}</h4>
            <button type={user.local === undefined ? 'button' : 'submit'}
              onClick={e=>setCart(
                {
                  item: e.currentTarget.value,
                  price:e.currentTarget.previousSibling.value,
                  count:1
                }
              )}
              value={a.name} className="add-button">Add to cart</button>
          </div>
        </div>
        )}
      </div>
    </Animated>
    </div>
  )
}
function Dessers(data){
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [user, setUser] = useState({});
  const [cart, setCart] = useLocalStorage('cart', {items:[]})
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/user');
      setUser(result.data)
    }
    fetchData()
  }, [user]);

  // function hideMe(){
  //   if(visible){
  //   setFading(true);
  //   setTimeout(() => setVisible(false), 650)
  // } else{
  //   setFading(false);
  //   setTimeout(() => setVisible(true), 250)
  // }
  // }

  return (
    <div className="menu-container dessers">

      <div  className="meals-expand">
        <h2>Dessers</h2>
      </div>
      <Animated
        animationIn='fadeIn'
        animationOut="fadeOut"
        isVisible={!fading}
        style={visible ? {display: "grid"} : {display: "none"}}>
      <div  className="meals-list" >
        { data.data.map(a=>
        <div key={a.name} className="single-item">
          <div className="meal-description-div">
            <h4 className="meal-description">{a.name}</h4>
            <span>{a.description}</span>
          </div>
          <div>
            <h4 className="meal-price-h4">{a.price}</h4>
          <button type={user.local === undefined ? 'button' : 'submit'}
            onClick={e=>setCart(
              {
                item: e.currentTarget.value,
                price:e.currentTarget.previousSibling.value,
                count:1
              }
            )}
            value={a.name} className="add-button">Add to cart</button>
          </div>
        </div>
       )}
      </div>
    </Animated>
    </div>
  )
}

function Menu(){
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const _isMounted = useRef(true);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  //const [show, setShow] = useState(false)

  const setShow = () => {
    console.log('asd')
    if(visible){
    setFading(true);
    setTimeout(() => setVisible(false), 650)
  } else{
    setFading(false);
    setTimeout(() => setVisible(true), 250)
  }
  }
  // const pushToCart = (e) => {
  //   const currentSibling = e.currentTarget.previousSibling.value;
  //
  //   let obj = {
  //     item: e.currentTarget.value,
  //     price:currentSibling,
  //     count:1
  //   }
  //
  //   if(user.local === null || user.local === undefined){
  //   let itemsFromStorage = JSON.parse(localStorage.getItem('cart'));
  //   if(JSON.parse(localStorage.getItem('cart')) === null){
  //     cart.items.push(obj)
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   } else{
  //
  //     itemsFromStorage.items.push(obj);
  //     localStorage.setItem('cart', JSON.stringify(itemsFromStorage));
  //   }
  // // window.location.href = ''
  // }
  // }


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

    <Meal data={meals} />
    <Drinks data={drinks} />
  <Dessers data={dessers} show={e=> setShow} visible={visible} fading={fading} />

</main>
  )}
</>
  )
}
export default Menu
