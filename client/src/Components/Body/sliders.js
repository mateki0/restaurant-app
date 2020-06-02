import React, {useState, useEffect} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

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
  const firstBreakfastCarousel =[{src0:salad,name0:'Salates', src1:pancakes,name1:'Pancakes' ,src2:eggs, name2:'Eggs'},
  {src0:pasta,name0:'Pasta', src1:chicken,name1:'Chicken', src2:salad, name2:'Salates'},
  {src0:salad,name0:'Salates', src1:pancakes,name1:'Eggs' ,src2:eggs, name2:'Eggs'},
]


  return(
    <div className="lunch-container">
      <div className="breakfast-title">
        <h2>MEALS</h2>
      </div>
      <Slider autoplay="2000">
        {firstBreakfastCarousel.map((slide,index) =>
      <div key={index} className="breakfast-slider">
          <div className="sliders">
          <img src={slide.src0} alt="salad" />
          <span>{slide.name0}</span>
          <button type="button">Add to cart >></button>
        </div>

        <div className="sliders">
          <img src={slide.src1} alt="meal" />
          <span>{slide.name1}</span>
          <button type="button">Add to cart >></button>
        </div>

        <div className="sliders">
          <img src={slide.src2} alt="drink"/>
          <span>{slide.name2}</span>
          <button type="button">Add to cart >></button>
        </div>
      </div>
    )}
</Slider>

    </div>
  )
}
function LunchSlider(){
  const firstBreakfastCarousel =[{src0:salad,name0:'Salates', src1:pancakes,name1:'Pancakes' ,src2:eggs, name2:'Eggs'},
  {src0:pasta,name0:'Pasta', src1:chicken,name1:'Chicken', src2:salad, name2:'Salates'},
  {src0:salad,name0:'Salates', src1:pancakes,name1:'Eggs' ,src2:eggs, name2:'Eggs'},
]
  return(
    <div className="lunch-container">
      <div className="breakfast-title">
        <h2>DRINKS</h2>
      </div>

      <Slider autoplay="2000">
        {firstBreakfastCarousel.map((slide,index) =>
      <div key={index} className="breakfast-slider">

        <div className="sliders">
          <img src={slide.src0} alt="salad" />
          <span>{slide.name0}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="sliders">
          <img src={slide.src1} alt="meal" />
          <span>{slide.name1}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="sliders">
          <img src={slide.src2} alt="drink"/>
          <span>{slide.name2}</span>
          <button type="button">Add to cart >></button>
        </div>
      </div>
    )}
  </Slider>

    </div>
  )
}

function DinnerSlider(){
  const firstBreakfastCarousel =[{src0:salad,name0:'Salates', src1:pancakes,name1:'Pancakes' ,src2:eggs, name2:'Eggs'},
  {src0:pasta,name0:'Pasta', src1:chicken,name1:'Chicken', src2:salad, name2:'Salates'},
  {src0:salad,name0:'Salates', src1:pancakes,name1:'Eggs' ,src2:eggs, name2:'Eggs'},
]

  return(
    <div className="lunch-container">
      <div className="breakfast-title">
        <h2>DESSERS</h2>
      </div>

      <Slider autoplay="2000">
        {firstBreakfastCarousel.map((slide,index) =>
      <div key={index} className="breakfast-slider">
        <div className="sliders">
          <img src={slide.src0} alt="salad" />
          <span>{slide.name0}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="sliders">
          <img src={slide.src1} alt="meal" />
          <span>{slide.name1}</span>
          <button type="button">Add to cart >></button>
        </div>
        <div className="sliders">
          <img src={slide.src2} alt="drink"/>
          <span>{slide.name2}</span>
          <button type="button">Add to cart >></button>
        </div>
      </div>
    )}
  </Slider>

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
