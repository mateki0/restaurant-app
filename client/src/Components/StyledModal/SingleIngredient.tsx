import React, { useEffect, useState } from 'react';
import { SingleItemProps } from '../SingleMenuBox/SingleMealItem';
import CounterContainer from './styled/CounterContainer';
import IngredientButton from './styled/IngredientButton';
import IngredientCount from './styled/IngredientCount';
import SingleIngredientContainer from './styled/SingleIngredientContainer';
// {ingredient,count,setPrice,itemPrice,price}
interface IngredientProps {
  ingredientName: string;
  count: number;
  ingredientPrice: number;
  setItemPrice: (price: number) => void;
  itemPrice: number;
  item: any;
  priceCalc: any;
}
const SingleIngredient = ({
  ingredientName,
  count,
  ingredientPrice,
  setItemPrice,
  itemPrice,
  item,
  priceCalc,
}: IngredientProps) => {
  const [itemCount, setItemCount] = useState<number>(count);

  const handleIncrement = () => {
    item.ingredients.forEach((a: any) => {
      if (a.ingredientName === ingredientName && a.count < 5) {
        a.count++;
        setItemCount(a.count);
        priceCalc();
      }
    });
  };

  const handleDecrement = () => {
    item.ingredients.forEach((a: any) => {
      if (a.ingredientName === ingredientName && a.count > 0) {
        a.count--;
        setItemCount(a.count);
        priceCalc();
      }
    });
  };

  return (
    <SingleIngredientContainer>
      <IngredientCount>{ingredientName}</IngredientCount>
      <CounterContainer>
        <IngredientButton onClick={() => handleDecrement()}>-</IngredientButton>
        <IngredientCount>{itemCount}</IngredientCount>
        <IngredientButton onClick={() => handleIncrement()}>+</IngredientButton>
      </CounterContainer>
    </SingleIngredientContainer>
  );
};

export default SingleIngredient;
