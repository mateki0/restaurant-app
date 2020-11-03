import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import CartContext from '../../Contexts/CartContext';
import { SingleItemProps } from '../SingleMenuBox/SingleMealItem';
import OpenModalButton from '../SingleMenuBox/styled/OpenModalButton';
import SingleIngredient from './SingleIngredient';
import AddToCartContainer from './styled/AddToCartContainer';
import CounterContainer from './styled/CounterContainer';
import IngredientCount from './styled/IngredientCount';

import ModalHeaderContainer from './styled/ModalHeaderContainer';
interface IStyledModal {
  setIsOpen: (arg0: boolean) => void;
  user: {
    cart: Array<any>;
    email: string;
    password: string;
  };
}
interface ISearchedItem {
  count: number;
  ingredients: {
    ingredientName: string;
    count: number;
    price: number;
  }[];
  name: string;
  price: string;
  type: string;
}

interface IngredientProps {
  ingredientName: string;
  count: number;
  price: number;
}
export interface UserMenuProps {
  cart: Array<any>;
  email: string;
  password: string;
}
const compareItems = (a: number[], b: number[]) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};
const StyledModal = ({ item, setIsOpen, user }: IStyledModal & SingleItemProps) => {
  const state = useContext(CartContext);
  const [itemPrice, setItemPrice] = useState(parseFloat(item.price));

  useEffect(() => {
    if (!window.localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify({ items: [] }));
    }
  }, []);
  const priceCalc = useCallback(() => {
    const ingredientsPrices = item.ingredients.map((a: IngredientProps) => {
      return a.price * a.count;
    });
    setItemPrice(ingredientsPrices.reduce((a, b) => a + b, 0));
  }, [item]);

  const calcTotalPrice = (items: any) => {
    let calc = items.map((a: any) => {
      return parseFloat(a.price) * a.count;
    });
    return calc.reduce((a: number, b: number) => a + b, 0);
  };
  const handleItemAdding = () => {
    const items = user ? user.cart : JSON.parse(window.localStorage.getItem('cart')!).items;
    if (items && items.length > 0) {
      let searchedItem: ISearchedItem = items.find((a: ISearchedItem) => {
        const ingredientsSum = a.ingredients.map((a: any) => a.count);
        const itemSum = item.ingredients.map((a: any) => a.count);
        return compareItems(ingredientsSum, itemSum);
      });
      if (searchedItem) {
        searchedItem.count++;
      } else {
        items.push(item);
      }
    } else {
      items.push(item);
    }

    state.setPrice(calcTotalPrice(items));
    window.localStorage.setItem('price', JSON.stringify(calcTotalPrice(items)));
    window.localStorage.setItem('cart', JSON.stringify({ items }));
    setIsOpen(false);
  };

  const updateDatabaseCart = () => {
    axios
      .post('/update', {
        data: JSON.parse(window.localStorage.getItem('cart')!).items,
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
      if (user) {
        updateDatabaseCart();
      }
    };
  });
  return (
    <div>
      <ModalHeaderContainer>
        <h2>{item.name}</h2>
        <h3>Choose Ingredients</h3>
      </ModalHeaderContainer>
      {item.ingredients.map(({ ingredientName, count, price }) => (
        <SingleIngredient
          key={ingredientName}
          ingredientName={ingredientName}
          count={count}
          item={item}
          priceCalc={priceCalc}
        />
      ))}
      <CounterContainer>
        <IngredientCount>Total Price: {itemPrice}$</IngredientCount>
      </CounterContainer>
      <AddToCartContainer>
        <OpenModalButton onClick={() => handleItemAdding()}>Add To Cart</OpenModalButton>
      </AddToCartContainer>
    </div>
  );
};

export default StyledModal;
