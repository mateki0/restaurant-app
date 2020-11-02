import styled from 'styled-components';

const HamburgerSpan = styled.span<{ isOpen: boolean }>`
  display: block;
  width: ${(props) => (props.isOpen ? '0%' : '36px')};
  height: 3px;
  position: relative;
  top: 6px;
  left: 12px;
  margin: 10px 0;
  background: #c83a3a;
  border-radius: 2px;
  transition: 0.25s ease-in-out;
  &:nth-of-type(1) {
    transition-delay: ${(props) => (props.isOpen ? '0s' : '0.5s')};
  }
  &:nth-of-type(2) {
    transition-delay: ${(props) => (props.isOpen ? '0.125s' : '0.625s')};
  }
  &:nth-of-type(3) {
    transition-delay: ${(props) => (props.isOpen ? '0.25s' : '0.75s')};
  }
`;
export default HamburgerSpan;
