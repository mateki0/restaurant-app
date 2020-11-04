import styled from 'styled-components';

const SingleCartItemContainer = styled.div`
  box-shadow: 5px 5px 8px 2px #555555;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  @media screen and (min-width: 1024px) {
    padding: 0;
    text-align: initial;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default SingleCartItemContainer;
