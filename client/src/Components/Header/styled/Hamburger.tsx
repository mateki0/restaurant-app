import styled from 'styled-components';

const Hamburger = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Hamburger;
