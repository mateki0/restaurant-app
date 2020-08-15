import React, { useState } from "react";
import "./itemsAdding.css";

const AddingPanel = () => {
  const [ingredients, setIngredients] = useState({});
  const [ingredientNumber, setIngredientNumber] = useState(2);
  const addIngredient = (e) => {
    let ingredient = {};
    setIngredientNumber(ingredientNumber + 1);
    const nameLabel = document.createElement("label");
    nameLabel.for = `ingredient${ingredientNumber}Name`;
    nameLabel.innerText = `Ingredient ${ingredientNumber} Name`;
    const name = document.createElement("input");
    name.type = "text";
    name.id = `ingredient${ingredientNumber}Name`;
    name.name = `ingredient${ingredientNumber}Name`;
    const priceLabel = document.createElement("label");
    priceLabel.for = `price${ingredientNumber}Price`;
    priceLabel.innerText = `Ingredient ${ingredientNumber} Price`;
    const price = document.createElement("input");
    price.type = "text";
    price.id = `ingredient${ingredientNumber}Price`;
    price.name = `ingredient${ingredientNumber}Price`;

    let form = document.getElementById("ingredients");
    console.log(form);
    form.appendChild(nameLabel);
    form.appendChild(name);
    form.appendChild(priceLabel);
    form.appendChild(price);
  };
  return (
    <main className="itemsAdding">
      <form method="post" action="/addItem" id="adding-form">
        <label for="itemName">Name</label>
        <input type="text" id="itemName" name="itemName" />
        <label for="itemPrice">Price</label>
        <input type="text" id="itemPrice" name="itemPrice" />
        <label for="itemType">Type</label>
        <input type="text" id="itemType" name="itemType" />
        <div id="ingredients">
          <label for="ingredient1Name">Ingredient Name</label>
          <input type="text" id="ingredient1Name" name="ingredient1Name" />
          <label for="ingredient1Price">Ingredient Price</label>
          <input type="text" id="ingredient1Price" name="ingredient1Price" />
        </div>
        <a onClick={(e) => addIngredient(e)} type="button">
          Add Ingredient
        </a>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default AddingPanel;
