import styled from 'styled-components';

const HamburgerContainer = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
  z-index: 999;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export default HamburgerContainer;
