import React from 'react';
import Title from './styled/Title';
import TitleWrapper from './styled/TitleWrapper';

const InfoBar = ({ title }: { title: string }) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export default InfoBar;
