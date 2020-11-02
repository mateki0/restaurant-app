import styled from 'styled-components';

const SingleIngredientName = styled.span`
  @media only screen and (min-width: 1024px) {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`;

export default SingleIngredientName;
