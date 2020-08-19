import React from "react";
import burger from "./burger.jpg";
import dessert from "./dessert.jpg";
import salad from "./salad.jpg";
const Boxes = () => (
  <div data-testid="boxes-div" className="boxes">
    <div className="box box1">
      <a href="/menu">
        <img src={burger} className="box-img" alt="burger" />
      </a>
      <h3>Burger</h3>
      <span>Here is place for meal description</span>
    </div>
    <div className="box box2">
      <a href="/menu">
        <img href="/menu" className="box-img" src={dessert} alt="desser" />
      </a>
      <h3>Pancakes</h3>
      <span>Here is place for meal description</span>
    </div>
    <div className="box box3">
      <a href="/menu">
        <img
          data-testid="boxes-img"
          src={salad}
          alt="salad"
          className="box-img"
        />
      </a>
      <h3>Salad</h3>
      <span>Here is place for meal description</span>
    </div>
  </div>
);
export default Boxes;
