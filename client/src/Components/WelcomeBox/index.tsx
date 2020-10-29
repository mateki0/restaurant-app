import React from 'react';
import TextWrapper from './styled/TextWrapper';
import WelcomeBoxWrapper from './styled/WelcomeBoxWrapper';

const WelcomeBox = () => {
  return (
    <WelcomeBoxWrapper>
      <TextWrapper>
        <h2>Welcome to our Restaurant</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor est vitae sapien
          posuere maximus. Mauris luctus nulla in condimentum lobortis. Vivamus mollis, est vitae
          bibendum placerat, dui ligula fermentum nunc, sit amet dignissim mauris tellus ut dui.
          Integer et ante sed urna dictum molestie ut ut sapien. Praesent dignissim, augue eu
          viverra facilisis, mauris turpis ultrices neque, nec condimentum velit nisl ac lacus
        </span>
      </TextWrapper>
    </WelcomeBoxWrapper>
  );
};

export default WelcomeBox;
