import React from 'react';
import MealImage from './styled/MealImage';
import MenuLink from './styled/MenuLink';
import SingleMealWrapper from './styled/SingleMealWrapper';

interface ISingleMeal {
  name: string;
  description: string;
  imgSrc: string;
}
const SingleMeal = ({ name, description, imgSrc }: ISingleMeal) => {
  return (
    <SingleMealWrapper>
      <MealImage src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <span>{description}</span>
      <MenuLink>See Menu</MenuLink>
    </SingleMealWrapper>
  );
};

export default SingleMeal;
