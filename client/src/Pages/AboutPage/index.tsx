import React from 'react';
import About from '../../Components/About';
import StyledMain from '../../Components/Layout/StyledMain';
import PageTitle from '../../Components/PageTitle';

const AboutPage = () => {
  return (
    <StyledMain>
      <PageTitle title="About us" />
      <About />
    </StyledMain>
  );
};

export default AboutPage;
