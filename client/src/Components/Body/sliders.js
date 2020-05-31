import React, {useState, useEffect} from 'react';
// import {CSSTransitionGroup} from 'react-transition-group'

import './body.css';
import burger from './burger.jpg';
import pasta from './pasta.jpg';
import chicken from './chicken.jpg';
import drink from './drink.jpg';
import salad from './salad.jpg';
import alcohol from './alcohol.jpg';
// import burrito from './burrito.jpg';
import desser from './desser.jpg';
import pancakes from './pancakes.jpg';
// import pizza from './pizza.jpg';
import eggs from './eggs.jpg';
// import soup from './soup.jpg';

function BreakfastSlider(){
  const firstBreakfastCarousel =[{src:salad,name:'Salates'},{src:pancakes,name:'Pancakes'},{src:eggs, name:'Eggs'},{breakfastKey:'breakfast1'}]
  const secondBreakfastCarousel =[{src:pasta,name:'Pasta'},{src:chicken,name:'Chicken'},{src:salad, name:'Salates'},{breakfastKey:'breakfast2'}]
  const [breakfastCarousel, setBreakfastCarousel] = useState(firstBreakfastCarousel);
  // useEffect(() => {
  //   const breakfastTimeout = window.setTimeout(() =>{
  //     breakfastCarousel[0].name === 'Salates' ? setBreakfastCarousel(secondBreakfastCarousel) : setBreakfastCarousel(firstBreakfastCarousel);
  //
  //
  //   }, 3000);
  //   return () => window.clearTimeout(breakfastTimeout);
  // })
  return(
    <div className="breakfast-container">
      <div className="breakfast-title">
        <h2>MEALS</h2>
      </div>
      {/* <CSSTransitionGroup
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionName="breakfast"
      > */}
      <div key={breakfastCarousel[3].breakfastKey} className="breakfast-slider">
        <button className="back" onClick={()=> breakfastCarousel[0].name === 'Salates' ? setBreakfastCarousel(secondBreakfastCarousel) : setBreakfastCarousel(firstBreakfastCarousel)}> b </button>

          <div className="slider">
          <img src={breakfastCarousel[0].src} alt="salad" />
          <span>{breakfastCarousel[0].name}</span>
          <button type="button">Add to cart >></button>
        </div>

        <div className="slider">
          <img src={breakfastCarousel[1].src} alt="meal" />
          <span>{breakfastCarousel[1].name}</span>
          <button type="button">Add to cart >></button>
        </div>

        <div className="slider">
          <img src={breakfastCarousel[2].src} alt="drink"/>
          <span>{breakfastCarousel[2].name}</span>
          <button type="button">Add to cart >></button>
        </div>

        <button className="forward" onClick={()=> breakfastCarousel[0].name === 'Salates' ? setBreakfastCarousel(secondBreakfastCarousel) : setBreakfastCarousel(firstBreakfastCarousel)}>></button>
      </div>
{/* </CSSTransitionGroup> */}

    </div>
  )
}
function LunchSlider(){
  const firstLunchCarousel =[{src:desser,name:'Desser'},{src:burger,name:'Meal'},{src:drink, name:'Drink'},{lunchKey:'lunch1'}]
  const secondLunchCarousel =[{src:pasta,name:'Pasta'},{src:chicken,name:'Chicken'},{src:pancakes, name:'Pancakes'},{lunchKey:'lunch2'}]
  const [lunchCarousel, setLunchCarousel] = useState(firstLunchCarousel);
  // useEffect(() => {
  //   const lunchTimeout = window.setTimeout(() =>{
  //     lunchCarousel[0].name === 'Desser' ? setLunchCarousel(secondLunchCarousel) : setLunchCarousel(firstLunchCarousel);
  //
  //
  //   }, 3000);
  //   return () => window.clearTimeout(lunchTimeout);
  // })
  return(
    <div className="lunch-container">
      <div className="breakfast-title">
        <h2>DRINKS</h2>
      </div>

      {/* <CSSTransitionGroup

        transitionName="lunch"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
      > */}
      <div key={lunchCarousel[3].lunchKey} className="breakfast-slider">
        <button className="back" onClick={()=> lunchCarousel[0].name === 'Desser' ? setLunchCarousel(secondLunchCarousel) : setLunchCarousel(firstLunchCarousel)}> b </button>
        <div className="slider">
          <img src={lunchCarousel[0].src} alt="salad" />
          <span>{lunchCarousel[0].name}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="slider">
          <img src={lunchCarousel[1].src} alt="meal" />
          <span>{lunchCarousel[1].name}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="slider">
          <img src={lunchCarousel[2].src} alt="drink"/>
          <span>{lunchCarousel[2].name}</span>
          <button type="button">Add to cart >></button>
        </div>
        <button className="forward" onClick={()=> lunchCarousel[0].name === 'Desser' ? setLunchCarousel(secondLunchCarousel) : setLunchCarousel(firstLunchCarousel)}>></button>
      </div>
      {/* </CSSTransitionGroup> */}

    </div>
  )
}

function DinnerSlider(){
  const firstDinnerCarousel =[{src:salad,name:'Salates'},{src:burger,name:'Meal'},{src:drink, name:'Drink'},{dinnerKey:'dinner1'}]
  const secondDinnerCarousel =[{src:pasta,name:'Pasta'},{src:chicken,name:'Chicken'},{src:alcohol, name:'Alcohol'},{dinnerKey:'dinner2'}]
  const [dinnerCarousel, setDinnerCarousel] = useState(firstDinnerCarousel);
  // useEffect(() => {
  //   const dinnerTimeout = window.setTimeout(() =>{
  //     carousel[0].name === 'Salates' ? setCarousel(secondCarousel) : setCarousel(firstCarousel);
  //
  //
  //   }, 3000);
  //   return () => window.clearTimeout(dinnerTimeout);
  // });

  return(
    <div className="lunch-container">
      <div className="breakfast-title">
        <h2>DESSERS</h2>
      </div>

      {/* <CSSTransitionGroup

        transitionName="dinner"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
      > */}
      <div key={dinnerCarousel[3].dinnerKey} className="breakfast-slider">
        <button className="back" onClick={()=> dinnerCarousel[0].name === 'Salates' ? setDinnerCarousel(secondDinnerCarousel) : setDinnerCarousel(firstDinnerCarousel)}> b </button>
        <div className="slider">
          <img src={dinnerCarousel[0].src} alt="salad" />
          <span>{dinnerCarousel[0].name}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="slider">
          <img src={dinnerCarousel[1].src} alt="meal" />
          <span>{dinnerCarousel[1].name}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="slider">
          <img src={dinnerCarousel[2].src} alt="drink"/>
          <span>{dinnerCarousel[2].name}</span>
          <button type="button">Add to cart >></button>
        </div>
        <button className="forward" onClick={()=> dinnerCarousel[0].name === 'Salates' ? setDinnerCarousel(secondDinnerCarousel) : setDinnerCarousel(firstDinnerCarousel)}>></button>
      </div>
      {/* </CSSTransitionGroup> */}

    </div>
  )
}
export default function Sliders(){
  return(
    <div className="breakfast-container">
      <BreakfastSlider/>
      <LunchSlider/>
      <DinnerSlider/>
    </div>
  )
}
