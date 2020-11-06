import React, { useState, useContext, useEffect } from 'react';
import BoxWrapper from './styled/BoxWrapper';
import BoxTitleWrapper from './styled/BoxTitleWrapper';
import BoxTitle from './styled/BoxTitle';
import { ItemsProps } from '../MenuComponent';
import SingleMealItem from './SingleMealItem';
import axios from 'axios';
import CartContext from '../../Contexts/CartContext';
import StyledAnimated from './styled/StyledAnimated';

interface ISingleMenuBox {
  title: string;
  data: ItemsProps[];
  user: {
    cart: Array<object>;
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
const compareItems = (a: number[], b: number[]) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const SingleMenuBox = ({ title, data, user }: ISingleMenuBox) => {
  const state = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleAnimation = () => {
    if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 650);
    } else {
      setFading(false);
      setTimeout(() => setVisible(true), 250);
    }
  };
  let items: ItemsProps[];
  const calcTotalPrice = (items: ItemsProps[]) => {
    if (items) {
      let calc = items.map((a) => {
        return parseFloat(a.price) * a.count;
      });
      return calc.reduce((a: number, b: number) => a + b, 0);
    }
  };
  const handleItemAdding = (item: ItemsProps) => {
    items = cart.items;
    if (items && items.length > 0) {
      let searchedItem: ISearchedItem = items.find((a: ISearchedItem) => {
        const ingredientsSum = a.ingredients.map((a: any) => a.count);
        const itemSum = item.ingredients.map((a: any) => a.count);
        return compareItems(ingredientsSum, itemSum) && item.name === a.name;
      });
      if (searchedItem) {
        searchedItem.count++;
      } else {
        items.push(item);
      }
    } else if (items) {
      items.push(item);
    }
    state.setCart(items);
    state.setPrice(calcTotalPrice(items));
  };

  const updateDatabaseCart = () => {
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
      if (items) {
        window.localStorage.setItem('price', JSON.stringify(calcTotalPrice(items)));
        window.localStorage.setItem('cart', JSON.stringify({ items }));
      }
      if (user) {
        updateDatabaseCart();
      }
    };
  }, []);
  return (
    <BoxWrapper>
      <BoxTitleWrapper onClick={handleAnimation}>
        <BoxTitle>{title}</BoxTitle>
      </BoxTitleWrapper>
      <StyledAnimated
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        fading={visible}
        isVisible={!fading}
      >
        {data.map((item, index) => (
          <SingleMealItem item={item} key={index} user={user} handleItemAdding={handleItemAdding} />
        ))}
      </StyledAnimated>
    </BoxWrapper>
  );
};
export default SingleMenuBox;
