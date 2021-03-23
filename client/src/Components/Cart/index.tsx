import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ItemsProps } from '../MenuComponent';
import SingleCartItem from './SingleCartItem';
import CartContainer from './styled/CartContainer';
import { IUser } from '../Header';
import CartContext from '../../Contexts/CartContext';
import CartLink from '../Header/styled/CartLink';

const Cart = ({ user }: IUser) => {
  const { cart } = useContext(CartContext);
  
  const calcTotalPrice = (items: any) => {
    if (cart && cart.items) {
      let calc = items.map((a: any) => {
        return parseFloat(a.price) * a.count;
      });
      return calc.reduce((a: number, b: number) => a + b, 0);
    }
  };

  const updateDatabaseCart = (items: ItemsProps[]) => {
    axios
      .post('/update', {
        data: items,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    if (cart && cart.items && cart.items.length > 0){
      calcTotalPrice(cart.items);
    }
  }, [cart]);

  useEffect(() => {
    return () => {
      if (cart && cart.items) {
        const items = [...cart.items];
        window.localStorage.setItem('price', JSON.stringify(calcTotalPrice(cart.items)));
        window.localStorage.setItem('cart', JSON.stringify({ items }));
      }
      if (user) {
        updateDatabaseCart(cart.items);
      }
    };
  });

  if (cart && cart.items && cart.items.length > 0) {
    return (
      <CartContainer>
        {cart.items.map((item: ItemsProps, b: number) => (
          <SingleCartItem
            key={b}
            item={item}
            ingredients={item.ingredients}
            name={item.name}
            items={cart.items}
          />
        ))}
      </CartContainer>
    );
  } else {
    return (
      <CartContainer>
        <CartLink href="/menu">Please add something from our menu</CartLink>
      </CartContainer>
    );
  }
};

export default Cart;
