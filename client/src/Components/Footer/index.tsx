import React from 'react';
import FooterInnerContainer from './styled/FooterInnerContainer';
import FooterLink from './styled/FooterLink';
import FooterWrapper from './styled/FooterWrapper';
import TopButton from './styled/TopButton';

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterWrapper>
      <FooterInnerContainer>
        <div>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/about">About</FooterLink>
        </div>
        <div>
          <TopButton onClick={handleScroll}>Back to top</TopButton>
        </div>
      </FooterInnerContainer>
    </FooterWrapper>
  );
};

export default Footer;
