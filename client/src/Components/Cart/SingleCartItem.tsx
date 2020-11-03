import React, { useContext, useState } from 'react';
import CartContext from '../../Contexts/CartContext';
import { ItemsProps } from '../MenuComponent';
import IngredientCount from '../StyledModal/styled/IngredientCount';
import CartIncrementButton from './styled/CartIncrementButton';
import ItemDesc from './styled/ItemDesc';
import ItemName from './styled/ItemName';
import NameDescDiv from './styled/NameDescDiv';
import PriceCountContainer from './styled/PriceCountContainer';
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
const SingleCartItem = ({ ingredients, name, item, items }: ISingleCartItemProps) => {
  console.log(items);
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
    if (item.count > 0) {
      item.count--;
      setCount(item.count);
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
        <CartIncrementButton onClick={() => handleIncrement(item)}>+</CartIncrementButton>
        <IngredientCount>{count}</IngredientCount>
        <CartIncrementButton onClick={() => handleDecrement(item)}>-</CartIncrementButton>
      </PriceCountContainer>
    </SingleCartItemContainer>
  );
};

export default SingleCartItem;
