import React, { useState } from 'react';
import CounterContainer from './styled/CounterContainer';
import IngredientButton from './styled/IngredientButton';
import IngredientCount from './styled/IngredientCount';
import SingleIngredientContainer from './styled/SingleIngredientContainer';

interface IngredientProps {
  ingredientName: string;
  count: number;
  item: any;
  priceCalc: any;
}
const SingleIngredient = ({ ingredientName, count, item, priceCalc }: IngredientProps) => {
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
