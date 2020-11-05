import React from 'react';
import Contact from '../../Components/Contact';
import StyledMain from '../../Components/Layout/StyledMain';
import PageTitle from '../../Components/PageTitle';

const ContactPage = () => {
  return (
    <StyledMain>
      <PageTitle title="Contact" />
      <Contact />
    </StyledMain>
  );
};

export default ContactPage;
