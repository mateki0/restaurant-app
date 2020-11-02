import React from 'react';
import PageTitleText from './styled/PageTitleText';
import PageTitleWrapper from './styled/PageTitleWrapper';

const PageTitle = ({ title }: { title: string }) => {
  return (
    <PageTitleWrapper>
      <PageTitleText>{title}</PageTitleText>
    </PageTitleWrapper>
  );
};

export default PageTitle;
