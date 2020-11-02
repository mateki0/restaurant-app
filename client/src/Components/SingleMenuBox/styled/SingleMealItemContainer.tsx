import styled from 'styled-components';

const SingleMealItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 10px;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    text-align: center;
  }
`;
export default SingleMealItemContainer;
