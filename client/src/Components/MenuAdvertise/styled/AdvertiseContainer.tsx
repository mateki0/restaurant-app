import styled from 'styled-components';

const AdvertiseContainer = styled.section`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px auto;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default AdvertiseContainer;
