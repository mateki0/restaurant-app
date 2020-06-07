import React from 'react';
import './itemsAdding.css';

export default function AddingPanel(){
  return(
    <main className="itemsAdding">
    <form method="post" action="/addItem">
      <label for="itemName">Name</label>
      <input type="text" id="itemName" name="itemName"/>
      <label for="itemPrice">Price</label>
      <input type="text" id="itemPrice" name='itemPrice'/>
      <label for="itemDescription">Description</label>
      <input type="text" id="itemDescription" name="itemDescription"/>
      <label for="itemType">Type</label>
      <input type="text" id="itemType" name="itemType"/>
      <button type="submit">Submit</button>
    </form>
  </main>
  )
}
