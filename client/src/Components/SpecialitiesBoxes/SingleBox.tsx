import React from 'react';
import SingleBoxImg from './styled/SingleBoxImg';
import SingleBoxWrapper from './styled/SingleBoxWrapper';

interface ISingleBox {
  name: string;
  description: string;
  imgSrc: string;
}
const SingleBox = ({ name, description, imgSrc }: ISingleBox) => {
  return (
    <SingleBoxWrapper>
      <SingleBoxImg alt={name} src={imgSrc} />
      <h2>{name}</h2>
      <span>{description}</span>
    </SingleBoxWrapper>
  );
};

export default SingleBox;
