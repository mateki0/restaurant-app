import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import SubPageWrapper from '../About/styled/SubPageWrapper';
import SingleMenuBox from '../SingleMenuBox';
export interface ItemsProps {
  id: string;
  name: string;
  ingredients: {
    ingredientName: string;
    count: number;
    price: number;
  }[];
  price: string;
  type: string;
}
const MenuComponent = () => {
  const [items, setItems] = useState<ItemsProps[]>();
  const [localCart, setLocalCart] = useState<any>([]);

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
        <SingleMenuBox title="Meals" data={items.filter((a) => a.type === 'Meal')} />
      </SubPageWrapper>
    );
  }
  return <div>Loading...</div>;
};
export default MenuComponent;
