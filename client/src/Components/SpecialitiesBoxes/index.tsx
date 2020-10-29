import React from 'react';
import SingleBox from './SingleBox';
import burger from '../images/burger.jpg';
import pancakes from '../images/pancakes.jpg';
import salad from '../images/burger.jpg';
import BoxesWrapper from './styled/BoxesWrapper';
const SpecalitiesBoxes = () => {
  return (
    <BoxesWrapper>
      <SingleBox name="Burger" description="Here is place for burger description" imgSrc={burger} />
      <SingleBox
        name="Pancakes"
        description="Here is place for pancakes description"
        imgSrc={pancakes}
      />
      <SingleBox name="Salad" description="Here is place for salad description" imgSrc={salad} />
    </BoxesWrapper>
  );
};

export default SpecalitiesBoxes;
