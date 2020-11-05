import styled from 'styled-components';

const BoxTitleWrapper = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  background-color: #efefef;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    width: 75vw;
  }
`;

export default BoxTitleWrapper;
