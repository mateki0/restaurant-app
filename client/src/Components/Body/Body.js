import React, {useState, useEffect} from 'react';
import {CSSTransitionGroup} from 'react-transition-group'
import './body.css';
import burger from './burger.jpg';
import pasta from './pasta.jpg';
import chicken from './chicken.jpg';
import drink from './drink.jpg';
import salad from './salad.jpg';
import Sliders from './sliders'
import MapContainer from '../MapContainer/MapContainer';
function FirstPanel(){

  
  return(
    <div className="name-container">
      <div className="name">
        <h1>My Test Restaurant</h1>
        <span>I should write some description here, but this page is only for learning resons, so it doesn't matter</span>
      </div>

    </div>
  )
}

function SecondPanel(){
  return(
    <div className="meals-container">
      <div className="meal first-meal">
        <img src={chicken} alt="chicken" />
        <h2 className="meal-name">Chicken</h2>
        <span className="meal-desc">Something very tasty</span><br/>
        <button type="button">$ 2.5 Add to cart >></button>
      </div>
      <div className="meal second-meal">
        <img src={burger} alt="burger"/>
        <h2 className="meal-name">Burger</h2>
        <span className="meal-desc">Something very tasty</span><br/>
        <button type="button">$ 2.5 Add to cart >></button>
      </div>
      <div className="meal third-meal">
        <img src={pasta} alt="pasta" />
          <h2 className="meal-name">Pasta</h2>
          <span className="meal-desc">Something very tasty</span><br/>
          <button type="button">$ 2.5 Add to cart >></button>
      </div>
    </div>
  )
}

function ThirdPanel(){
  return(
    <div className="delivery">
      <h1>
        Here should be information about online food order system and<br/> delivery options and <br/>pricing
      </h1>
    </div>
  )
}
function Boxes(){
  return(
    <div className="boxes">
      <div className="box box1">
        <img src={burger} alt="burger"/>
        <h3>Burger</h3>
        <span>Here is place for meal description</span>
      </div>
      <div className="box box2">
        <img src={pasta} alt="pasta"/>
        <h3>Spaghetti</h3>
        <span>Here is place for meal description</span>
      </div>
      <div className="box box3">
        <img src={salad} alt="salad"/>
        <h3>Salad</h3>
        <span>Here is place for meal description</span>
      </div>
    </div>
  )
}

function WelcomeToRestaurant(){
  return(
    <div className="welcome">
      <div className="welcome-container">
        <div>
          <h3>Welcome to Restaurant </h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor est vitae sapien posuere maximus.
           Mauris luctus nulla in condimentum lobortis. Vivamus mollis, est vitae bibendum placerat, dui ligula fermentum nunc,
            sit amet dignissim mauris tellus ut dui. Integer et ante sed urna dictum molestie ut ut sapien. Praesent dignissim,
           augue eu viverra facilisis, mauris turpis ultrices neque, nec condimentum velit nisl ac lacus.</span>
        </div>
        <div>
          <h3>Welcome to Restaurant </h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor est vitae sapien posuere maximus.
             Mauris luctus nulla in condimentum lobortis. Vivamus mollis, est vitae bibendum placerat, dui ligula fermentum nunc,
              sit amet dignissim mauris tellus ut dui. Integer et ante sed urna dictum molestie ut ut sapien. Praesent dignissim,
             augue eu viverra facilisis, mauris turpis ultrices neque, nec condimentum velit nisl ac lacus.</span>
        </div>
        <div>
          <h3>Welcome to Restaurant </h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor est vitae sapien posuere maximus.
             Mauris luctus nulla in condimentum lobortis. Vivamus mollis, est vitae bibendum placerat, dui ligula fermentum nunc,
              sit amet dignissim mauris tellus ut dui. Integer et ante sed urna dictum molestie ut ut sapien. Praesent dignissim,
             augue eu viverra facilisis, mauris turpis ultrices neque, nec condimentum velit nisl ac lacus.</span>
        </div>
      </div>
    </div>
  )
}

function MarketingSlider(){

  const burgerEl =
    {
      src:burger,
      h2:'Very delicious Burger',
      span:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.'
    }
  const pastaEl =
    {
      src:pasta,
      h2:'Very delicious Pasta',
      span:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.'
    }
  const drinkEl =
    {
      src:drink,
      h2:'Try Yourself',
      span:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.'
    }


  const [slider, setSlider] = useState(burgerEl);



  useEffect(() => {
    const marketingTimeout = setTimeout(() =>{
      if(slider.src === burger){
        setSlider(pastaEl)
      }
      if(slider.src === pasta){
        setSlider(drinkEl)
      }
      if(slider.src === drink){
        setSlider(burgerEl)
      }


    }, 2000)
    return () => clearTimeout(marketingTimeout)
  })
  return(
    <div className="breakfast-container">
    <CSSTransitionGroup
      transitionName="marketing"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
    >
    <div key={slider.src} className="marketing-slider">
      <img src={slider.src} alt={slider.h2}/>
    <div className="marketing-description">
      <h2>{slider.h2}</h2>
      <span>
        {slider.span}
      </span>
      </div>
    </div>
  </CSSTransitionGroup>
</div>
  )
}

function Body(){
  return(
    <div>
      <MapContainer/>
      <FirstPanel/>
      <SecondPanel/>
      <ThirdPanel/>
      <Sliders/>
      <Boxes/>
      <WelcomeToRestaurant/>
      <MarketingSlider/>

    </div>
  )
}
export {Body, WelcomeToRestaurant, Boxes};
