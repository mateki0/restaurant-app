import React, { useEffect } from 'react';
import axios from 'axios';
import { ItemsProps } from '../MenuComponent';
import SingleCartItem from './SingleCartItem';
import CartContainer from './styled/CartContainer';
import { IUser } from '../Header';

const Cart = ({ user }: IUser) => {
  const { items } = JSON.parse(window.localStorage.getItem('cart')!);
  const calcTotalPrice = (items: ItemsProps[]) => {
    let calc = items.map((a) => {
      return parseFloat(a.price) * a.count;
    });
    return calc.reduce((a: any, b: any) => a + b, 0);
  };
  useEffect(() => {
    calcTotalPrice(items);
  }, [items]);
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
    return () => {
      window.localStorage.setItem('cart', JSON.stringify({ items }));
      if (user) {
        window.localStorage.setItem('cart', JSON.stringify({ items }));
        updateDatabaseCart(items);
      }
    };
  });
  if (items && items.length > 0) {
    return (
      <CartContainer>
        {items.map((item: ItemsProps, b: number) => (
          <SingleCartItem
            key={b}
            item={item}
            ingredients={item.ingredients}
            name={item.name}
            items={items}
          />
        ))}
      </CartContainer>
    );
  } else {
    return <div>No items</div>;
  }
};

export default Cart;
