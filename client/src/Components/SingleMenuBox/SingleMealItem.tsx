import React, { useState } from 'react';
import { ItemsProps } from '../MenuComponent';
import StyledModal from '../StyledModal';
import StyledModalWrapper from '../StyledModal/styled/StyledModalWrapper';
import MealDescription from './styled/MealDescription';
import MealIngredients from './styled/MealIngredients';
import MealName from './styled/MealName';
import NameContainer from './styled/NameContainer';
import OpenModalButton from './styled/OpenModalButton';
import PriceContainer from './styled/PriceContainer';
import SingleIngredientName from './styled/SingleIngredientName';
import SingleMealItemContainer from './styled/SingleMealItemContainer';
export interface SingleItemProps {
  item: {
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
  };
  user: {
    cart: Array<object>;
    email: string;
    password: string;
  };
  handleItemAdding: (item: ItemsProps) => void;
}

const SingleMealItem = ({ item, user, handleItemAdding }: SingleItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SingleMealItemContainer>
      <MealDescription>
        <NameContainer>
          <MealName>{item.name}</MealName>
        </NameContainer>
        <MealIngredients>
          {Object.values(item.ingredients).map((ingredient, index) => (
            <SingleIngredientName key={index}>{ingredient.ingredientName}</SingleIngredientName>
          ))}
        </MealIngredients>
      </MealDescription>
      <PriceContainer>
        <MealName>{item.price}$</MealName>
        <OpenModalButton onClick={() => setIsOpen(true)}>Add To Cart</OpenModalButton>
      </PriceContainer>
      <StyledModalWrapper
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <StyledModal
          handleItemAdding={handleItemAdding}
          toggleModal={toggleModal}
          item={item}
          user={user}
        ></StyledModal>
      </StyledModalWrapper>
    </SingleMealItemContainer>
  );
};

export default SingleMealItem;
