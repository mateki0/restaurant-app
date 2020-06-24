import React from "react";
import "./cart.css";
import Title from "../Title";
import ItemList from "./ItemList";

const Cart = ({
  user,
  localCart,
  userCart,
  handleChange,
  price,
  isLogged,
  updateCart,
}) => {
  return (
    <main data-testid="cart-div">
      <Title value="Your Cart:" />
      <ItemList
        user={user}
        localCart={localCart}
        userCart={userCart}
        handleChange={handleChange}
        price={price}
        isLogged={isLogged}
        updateCart={updateCart}
      />
    </main>
  );
};
export default Cart;
