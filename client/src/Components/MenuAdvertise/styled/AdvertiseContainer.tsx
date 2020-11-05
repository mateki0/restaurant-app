import styled from 'styled-components';

const AdvertiseContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px auto;
  padding: 0 10px;
  @media screen and (min-width: 1024px) {
    width: 80vw;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default AdvertiseContainer;
