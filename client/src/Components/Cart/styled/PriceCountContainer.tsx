import styled from 'styled-components';

const PriceCountContainer = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 50px 30px 50px;
  justify-self: center;
  justify-items: center;
  align-content: center;
  > span {
    align-self: center;
  }
`;
export default PriceCountContainer;
