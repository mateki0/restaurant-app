import styled from 'styled-components';

const CartLink = styled.a`
  transition: all 0.3s;
  color: #000;
  padding: 15px 0;
  &:hover {
    cursor: pointer;
    color: #c83a3a;
    text-decoration: none;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;
export default CartLink;
