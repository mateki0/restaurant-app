import styled from 'styled-components';

const CartIncrementButton = styled.button`
  padding: 6px 12px;
  transition: all 0.5s;
  border: none;
  background-color: transparent;
  box-shadow: 2px 2px 15px 2px #000000;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: #000;
    box-shadow: none;
  }
`;

export default CartIncrementButton;
