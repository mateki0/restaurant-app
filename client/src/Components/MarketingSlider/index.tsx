import React from 'react';
import StyledCarousel from '../MealsSlider/styled/StyledCarousel';
import MarketingSliderWrapper from './styled/MarketingSliderWrapper';
import { Slider, Slide, DotGroup } from 'pure-react-carousel';
import burger from '../images/burger.jpg';
import pasta from '../images/pasta.jpg';
import drink from '../images/drink.jpg';
import SlideWrapper from './styled/SlideWrapper';
import SliderDescriptionContainer from './styled/SliderDescriptionContainer';
import SliderName from './styled/SliderName';
import MarketingSliderImg from './styled/MarketingSliderImg';
const slides = [
  {
    src: burger,
    h2: 'Very delicious Burger',
    span:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.',
  },
  {
    src: pasta,
    h2: 'Very delicious Pasta',
    span:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.',
  },
  {
    src: drink,
    h2: 'Try Yourself',
    span:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tempor est vitae sapien posuere maximus.',
  },
];
const MarketingSlider = () => {
  return (
    <MarketingSliderWrapper>
      <StyledCarousel
        isPlaying={true}
        infinite={true}
        interval={3000}
        naturalSlideHeight={400}
        naturalSlideWidth={1500}
        totalSlides={slides.length}
        customHeight="470px"
      >
        <Slider>
          {slides.map((item, index) => (
            <Slide index={index} key={index}>
              <SlideWrapper>
                <MarketingSliderImg src={item.src} alt={item.h2} />
                <SliderDescriptionContainer>
                  <SliderName>{item.h2}</SliderName>
                  <span>{item.span}</span>
                </SliderDescriptionContainer>
              </SlideWrapper>
            </Slide>
          ))}
        </Slider>
        <DotGroup />
      </StyledCarousel>
    </MarketingSliderWrapper>
  );
};

export default MarketingSlider;
