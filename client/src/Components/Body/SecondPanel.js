import React from "react";
import burger from "./burger.jpg";
import pasta from "./pasta.jpg";
import chicken from "./chicken.jpg";
const SecondPanel = () => (
  <div data-testid="second-panel-div" className="meals-container">
    <div className="meal first-meal">
      <img data-testid="second-panel-image" src={chicken} alt="chicken" />
      <h2 className="meal-name">Chicken</h2>
      <span className="meal-desc">Something very tasty</span>
      <br />
      <a data-testid="second-panel-href" href="/menu" className="see-menu-a">
        See our menu
      </a>
    </div>
    <div className="meal second-meal">
      <img src={burger} alt="burger" />
      <h2 className="meal-name">Burger</h2>
      <span className="meal-desc">Something very tasty</span>
      <br />
      <a href="/menu" className="see-menu-a">
        See our menu
      </a>
    </div>
    <div className="meal third-meal">
      <img src={pasta} alt="pasta" />
      <h2 className="meal-name">Pasta</h2>
      <span className="meal-desc">Something very tasty</span>
      <br />
      <a href="/menu" className="see-menu-a">
        See our menu
      </a>
    </div>
  </div>
);
export default SecondPanel;
