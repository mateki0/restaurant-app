import React from 'react';
import BoxWrapper from './styled/BoxWrapper';
import BoxTitleWrapper from './styled/BoxTitleWrapper';
import BoxTitle from './styled/BoxTitle';
import { ItemsProps } from '../MenuComponent';
import SingleMealItem from './SingleMealItem';

interface ISingleMenuBox {
  title: string;
  data: ItemsProps[];
}

const SingleMenuBox = ({ title, data }: ISingleMenuBox) => {
  console.log(data);
  return (
    <BoxWrapper>
      <BoxTitleWrapper>
        <BoxTitle>{title}</BoxTitle>
      </BoxTitleWrapper>
      {data.map((item, index) => (
        <SingleMealItem item={item} key={index} />
      ))}
    </BoxWrapper>
  );
};
export default SingleMenuBox;
