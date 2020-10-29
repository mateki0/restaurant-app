import styled from 'styled-components';

const BoxesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  justify-content: space-around;
  margin: 50px auto 0 auto;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
export default BoxesWrapper;
