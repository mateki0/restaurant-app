import React, { useState } from 'react';

const CartContext = React.createContext({
  cart: JSON.parse(window.localStorage.getItem('cart')!),
  price: '0',
  user: { cart: [], email: 'example', password: 'none' },
  setCart: (items: any) => items,
  setPrice: (price: any) => price,
  setUser: (user: any) => user,
});

export const CartContextProvider = (props: any) => {
  const setCart = (items: any) => {
    setState({ ...state, cart: items });
  };
  const setPrice = (price: any) => {
    setState({ ...state, price: price });
  };
  const setUser = (user: any) => {
    setState({ ...state, user: user });
  };

  const initState = {
    cart: JSON.parse(window.localStorage.getItem('cart')!),
    price: window.localStorage.getItem('price')!,
    user: { cart: [] as object[], email: 'example', password: 'none' },
    setCart: setCart,
    setPrice: setPrice,
    setUser: setUser,
  };
  const [state, setState] = useState(initState);
  return <CartContext.Provider value={state}>{props.children}</CartContext.Provider>;
};
export default CartContext;
