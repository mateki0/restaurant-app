import React, { useCallback, useState } from 'react';
import { ItemsProps } from '../MenuComponent';
import { SingleItemProps } from '../SingleMenuBox/SingleMealItem';
import OpenModalButton from '../SingleMenuBox/styled/OpenModalButton';
import SingleIngredient from './SingleIngredient';
import AddToCartContainer from './styled/AddToCartContainer';
import CounterContainer from './styled/CounterContainer';
import IngredientCount from './styled/IngredientCount';

import ModalHeaderContainer from './styled/ModalHeaderContainer';
interface IStyledModal {
  handleItemAdding: (item: ItemsProps) => void;
  toggleModal: () => void;
  user: {
    cart: Array<any>;
    email: string;
    password: string;
  };
}

interface IngredientProps {
  ingredientName: string;
  count: number;
  price: number;
}

const StyledModal = ({ item, handleItemAdding, toggleModal }: IStyledModal & SingleItemProps) => {
  const [itemPrice, setItemPrice] = useState(parseFloat(item.price));

  const priceCalc = useCallback(() => {
    const ingredientsPrices = item.ingredients.map((a: IngredientProps) => {
      return a.price * a.count;
    });
    setItemPrice(ingredientsPrices.reduce((a, b) => a + b, 0));
  }, [item]);

  return (
    <div>
      <ModalHeaderContainer>
        <h2>{item.name}</h2>
        <h3>Choose Ingredients</h3>
      </ModalHeaderContainer>
      {item.ingredients.map(({ ingredientName, count }) => (
        <SingleIngredient
          key={ingredientName}
          ingredientName={ingredientName}
          count={count}
          item={item}
          priceCalc={priceCalc}
        />
      ))}
      <CounterContainer>
        <IngredientCount>Total Price: {itemPrice.toFixed(2)}$</IngredientCount>
      </CounterContainer>
      <AddToCartContainer>
        <OpenModalButton
          onClick={() => {
            handleItemAdding(item);
            toggleModal();
          }}
        >
          Add To Cart
        </OpenModalButton>
      </AddToCartContainer>
    </div>
  );
};

export default StyledModal;
