import React, { useCallback, useContext, useEffect, useState } from 'react';
import LocalCartContext from '../../Contexts/LocalCartContext';
import TotalPriceContext from '../../Contexts/TotalPriceContext';
import { SingleItemProps } from '../SingleMenuBox/SingleMealItem';
import OpenModalButton from '../SingleMenuBox/styled/OpenModalButton';
import SingleIngredient from './SingleIngredient';
import AddToCartContainer from './styled/AddToCartContainer';
import CounterContainer from './styled/CounterContainer';
import IngredientCount from './styled/IngredientCount';

import ModalHeaderContainer from './styled/ModalHeaderContainer';
interface IStyledModal {
  setIsOpen: (arg0: boolean) => void;
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
const StyledModal = ({ item, setIsOpen }: IStyledModal & SingleItemProps) => {
  const state = useContext(TotalPriceContext);
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

    return calc.reduce((a: any, b: any) => a + b, 0);
  };
  const handleItemAdding = () => {
    const items = JSON.parse(window.localStorage.getItem('cart')!).items;
    if (items.length > 0) {
      let searchedItem: ISearchedItem = items.find((a: ISearchedItem) => {
        return a.name === item.name;
      });
      if (searchedItem) {
        searchedItem.count++;
      } else {
        items.push(item);
      }
      window.localStorage.setItem('cart', JSON.stringify({ items }));
    } else {
      items.push(item);

      window.localStorage.setItem('cart', JSON.stringify({ items }));
    }
    state.setPrice(calcTotalPrice(items));
    window.localStorage.setItem('price', JSON.stringify(calcTotalPrice(items)));
    setIsOpen(false);
  };
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
          ingredientPrice={price}
          setItemPrice={setItemPrice}
          itemPrice={itemPrice}
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
