import styled from 'styled-components';

const SingleMealWrapper = styled.div`
  width: 300px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  color: #5a5a5a;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    &:nth-of-type(2) {
      margin-top: 100px;
    }
  }
`;

export default SingleMealWrapper;
