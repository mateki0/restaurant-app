import React from 'react';
import SliderWrapper from './styled/SliderWrapper';
import { Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import StyledCarousel from './styled/StyledCarousel';
import pasta from '../images/pasta.jpg';
import chicken from '../images/chicken.jpg';
import salad from '../images/salad.jpg';
import pancakes from '../images/pancakes.jpg';
import eggs from '../images/eggs.jpg';
import SliderImage from './styled/SliderImage';
import SliderTitle from './styled/SliderTitle';
import MenuLink from '../MenuAdvertise/styled/MenuLink';
import SliderLinkWrapper from './styled/SliderLinkWrapper';
const MealsSlider = () => {
  const carousel = [
    {
      src0: salad,
      name0: 'Salads',
      src1: pancakes,
      name1: 'Pancakes',
      src2: eggs,
      name2: 'Eggs',
    },
    {
      src0: pasta,
      name0: 'Pasta',
      src1: chicken,
      name1: 'Chicken',
      src2: salad,
      name2: 'Salads',
    },
    {
      src0: salad,
      name0: 'Salads',
      src1: pancakes,
      name1: 'Eggs',
      src2: eggs,
      name2: 'Eggs',
    },
  ];
  return (
    <SliderWrapper>
      <SliderTitle>Meals</SliderTitle>
      <StyledCarousel
        naturalSlideWidth={495}
        naturalSlideHeight={365}
        totalSlides={carousel.length}
        isPlaying={true}
        infinite={true}
        interval={3000}
        customHeight="100px"
      >
        <Slider>
          {carousel.map((item, i) => (
            <Slide index={i}>
              <SliderImage src={item.src0} />
              <SliderImage src={item.src1} />
              <SliderImage src={item.src2} />
            </Slide>
          ))}
        </Slider>
        <DotGroup />
      </StyledCarousel>
      <SliderLinkWrapper>
        <MenuLink>See Our Menu</MenuLink>
      </SliderLinkWrapper>
    </SliderWrapper>
  );
};

export default MealsSlider;
