import React from 'react';
import SingleMeal from './SingleMeal';
import chicken from '../images/chicken.jpg';
import burger from '../images/burger.jpg';
import pasta from '../images/pasta.jpg';
import AdvertiseContainer from './styled/AdvertiseContainer';
const MenuAdvertise = () => {
  return (
    <AdvertiseContainer>
      <SingleMeal imgSrc={chicken} description="Very Tasty Chicken" name="Chicken" />
      <SingleMeal imgSrc={burger} description="Very Tasty Burger" name="Burger" />
      <SingleMeal imgSrc={pasta} description="Very Tasty Pasta" name="Pasta" />
    </AdvertiseContainer>
  );
};

export default MenuAdvertise;
