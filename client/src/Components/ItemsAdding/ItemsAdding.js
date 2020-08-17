import React from "react";
import "./itemsAdding.css";

const AddingPanel = () => {
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

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default AddingPanel;
