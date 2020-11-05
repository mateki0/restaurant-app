import styled from 'styled-components';

const CartContainer = styled.section`
  margin: 30px auto 0 auto;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 90vw;
  @media screen and (min-width: 1024px) {
    width: 82vw;
    display: grid;
    grid-template-columns: 40vw 40vw;
    gap: 2vw;
  }
`;
export default CartContainer;
