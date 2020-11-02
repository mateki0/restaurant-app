import styled from 'styled-components';

const MealIngredients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
export default MealIngredients;
