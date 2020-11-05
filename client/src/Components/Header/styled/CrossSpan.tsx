import styled from 'styled-components';

const CrossSpan = styled.span<{ isOpen: boolean }>`
  position: absolute;
  display: block;
  background: #c83a3a;
  border-radius: 2px;
  transition: 0.25s ease-in-out;
  &:nth-of-type(1) {
    height: ${(props) => (props.isOpen ? '80%' : '0%')};
    width: 3px;
    top: 13%;
    left: 30px;
    transition-delay: ${(props) => (props.isOpen ? '0.625s' : '0s')};
  }
  &:nth-of-type(2) {
    left: 13%;
    top: 30px;
    width: ${(props) => (props.isOpen ? '80%' : '0%')};
    height: 3px;
    transition-delay: ${(props) => (props.isOpen ? '0.375s' : '0.25s')};
  }
`;

export default CrossSpan;
