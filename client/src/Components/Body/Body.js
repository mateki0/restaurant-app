import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
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
        <a href="/menu" className="see-menu-a">See our menu</a>
      </div>
      <div className="meal second-meal">
        <img src={burger} alt="burger"/>
        <h2 className="meal-name">Burger</h2>
        <span className="meal-desc">Something very tasty</span><br/>
        <a href="/menu" className="see-menu-a">See our menu</a>
      </div>
      <div className="meal third-meal">
        <img src={pasta} alt="pasta" />
          <h2 className="meal-name">Pasta</h2>
          <span className="meal-desc">Something very tasty</span><br/>
          <a href="/menu" className="see-menu-a">See our menu</a>
      </div>
    </div>
  )
}

function ThirdPanel(){
  return(
    <div className="delivery">
      <div>
        <span>
          Here should be information about online food order system anddelivery options and pricing
        </span>
      </div>
    </div>
  )
}
function Boxes(){
  return(
    <div className="boxes">
      <div className="box box1">
        <a href="/menu">
          <img src={burger} className="box-img" alt="burger"/>
        </a>
        <h3>Burger</h3>
        <span>Here is place for meal description</span>
      </div>
      <div className="box box2">
        <a href="/menu">
          <img href="/menu" className="box-img" src={pasta} alt="pasta"/>
        </a>
        <h3>Spaghetti</h3>
        <span>Here is place for meal description</span>
      </div>
      <div className="box box3">
        <a href="/menu">
          <img src={salad} alt="salad" className="box-img"/>
        </a>
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
    const slides = [
      {
        src:burger,
        h2:'Very delicious Burger',
        span:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.'
      },
      {
        src:pasta,
        h2:'Very delicious Pasta',
        span:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.'
      },
      {
        src:drink,
        h2:'Try Yourself',
        span:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.'
      }
    ]




  return(
    <div className="marketing-container">
    <Slider >
      {slides.map((slide,index) =>
    <div key={index} className="marketing-slider">
      <img className="marketing-slider-img" src={slide.src} alt={slide.h2}/>
      <div className="marketing-description">
        <div className="marketing-slide-name-div">
          <span className="marketing-slide-name">{slide.h2}</span>
        </div>
        <div className="marketing-slide-description-div">
          <span className="marketing-slide-description">
            {slide.span}
          </span>
        </div>
      </div>
    </div>
  )}
  </Slider>
</div>
  )
}

function Body(){
  return(
    <main>
      <MapContainer/>
      <FirstPanel/>
      <SecondPanel/>
      <ThirdPanel/>
      <Sliders/>
      <Boxes/>
      <WelcomeToRestaurant/>
      <MarketingSlider/>
    </main>
  )
}
export {Body, WelcomeToRestaurant, Boxes};
