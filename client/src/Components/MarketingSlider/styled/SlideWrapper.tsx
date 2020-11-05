import styled from 'styled-components';

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default SlideWrapper;
