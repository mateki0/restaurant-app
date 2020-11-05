import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import SubPageWrapper from '../About/styled/SubPageWrapper';
import SingleMenuBox from '../SingleMenuBox';
import { IUser } from '../Header';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import LoadingWrapper from './LoadingWrapper';
export interface ItemsProps {
  id: string;
  name: string;
  ingredients: {
    ingredientName: string;
    count: number;
    price: number;
  }[];
  count: number;
  price: string;
  type: string;
}

const MenuComponent = ({ user }: IUser) => {
  const [items, setItems] = useState<ItemsProps[]>();
  const fetchItems = useCallback(async () => {
    const result = await axios('/items');
    setItems(result.data);
  }, []);
  useEffect(() => {
    fetchItems();
  }, []);
  if (items !== undefined) {
    return (
      <SubPageWrapper>
        <SingleMenuBox title="Meals" data={items.filter((a) => a.type === 'Meal')} user={user} />
        <SingleMenuBox title="Drinks" data={items.filter((a) => a.type === 'Drink')} user={user} />
        <SingleMenuBox
          title="Desserts"
          data={items.filter((a) => a.type === 'Dessert')}
          user={user}
        />
      </SubPageWrapper>
    );
  }
  return (
    <LoadingWrapper>
      <LoadingIcon />
    </LoadingWrapper>
  );
};
export default MenuComponent;
