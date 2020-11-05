import React, { useContext, useState } from 'react';
import CartContext from '../../Contexts/CartContext';
import { ItemsProps } from '../MenuComponent';
import IngredientButton from '../StyledModal/styled/IngredientButton';
import IngredientCount from '../StyledModal/styled/IngredientCount';
import ItemDesc from './styled/ItemDesc';
import ItemName from './styled/ItemName';
import NameDescDiv from './styled/NameDescDiv';
import PriceCountContainer from './styled/PriceCountContainer';
import RemoveButton from './styled/RemoveButton';
import SingleCartItemContainer from './styled/SingleCartItemContainer';

interface ItemProps {
  id: string;
  name: string;
  ingredients: {
    ingredientName: string;
    count: number;
    price: number;
  }[];
  price: string;
  type: string;
  count: number;
}
interface ISingleCartItemProps {
  ingredients: { ingredientName: string; count: number; price: number }[];
  name: string;
  item: ItemProps;
  items: ItemsProps[];
}
const compareItems = (a: number[], b: number[]) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};
const SingleCartItem = ({ ingredients, name, item, items }: ISingleCartItemProps) => {
  const state = useContext(CartContext);
  const [count, setCount] = useState(item.count);
  const calcTotalPrice = (items: ItemsProps[]) => {
    let calc = items.map((a) => {
      return parseFloat(a.price) * a.count;
    });

    return calc.reduce((a: number, b: number) => a + b, 0);
  };

  const handleIncrement = (item: ItemProps) => {
    item.count++;
    setCount(item.count);
    state.setPrice(calcTotalPrice(items));
  };

  const handleDecrement = (item: ItemProps) => {
    if (item.count > 1) {
      item.count--;
      setCount(item.count);
      state.setPrice(calcTotalPrice(items));
    }
  };
  const handleRemove = (item: ItemsProps) => {
    let searchedItem = items.find((a: any) => {
      const ingredientsSum = a.ingredients.map((a: any) => a.count);
      const itemSum = item.ingredients.map((a: any) => a.count);
      return compareItems(ingredientsSum, itemSum) && a.name === item.name;
    });
    if (searchedItem) {
      items.splice(items.indexOf(searchedItem), 1);
      state.setPrice(calcTotalPrice(items));
    }
  };
  return (
    <SingleCartItemContainer>
      <NameDescDiv>
        <ItemName>{name}</ItemName>
        {ingredients.map((ingredient) => (
          <ItemDesc key={ingredient.ingredientName}>
            {ingredient.count} x {ingredient.ingredientName}
          </ItemDesc>
        ))}
      </NameDescDiv>
      <PriceCountContainer>
        <IngredientButton onClick={() => handleIncrement(item)}>+</IngredientButton>
        <IngredientCount>{count}</IngredientCount>
        <IngredientButton onClick={() => handleDecrement(item)}>-</IngredientButton>
      </PriceCountContainer>
      <RemoveButton onClick={() => handleRemove(item)}>Remove</RemoveButton>
    </SingleCartItemContainer>
  );
};

export default SingleCartItem;
