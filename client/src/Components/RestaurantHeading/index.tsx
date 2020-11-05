import React from 'react';
import Heading from './styled/Heading';
import HeadingWrapper from './styled/HeadingWrapper';
import SubHeading from './styled/SubHeading';

const RestaurantHeading = () => {
  return (
    <HeadingWrapper>
      <Heading>My Example Restaurant</Heading>
      <SubHeading>
        I should write some description here, but this page is only for learning resons, so it
        doesn't matter
      </SubHeading>
    </HeadingWrapper>
  );
};

export default RestaurantHeading;
