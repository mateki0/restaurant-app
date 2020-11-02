import React from 'react';
import SubPageWrapper from '../About/styled/SubPageWrapper';
import ContactGrid from './styled/ContactGrid';
import ContactWrapper from './styled/ContactWrapper';

const Contact = () => {
  return (
    <SubPageWrapper>
      <ContactWrapper>
        <ContactGrid>
          <span>Adress: </span>
          <span>Our Email: </span>
          <span>Phone</span>
        </ContactGrid>
        <ContactGrid>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </ContactGrid>
      </ContactWrapper>
    </SubPageWrapper>
  );
};

export default Contact;
