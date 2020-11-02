import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 0 20px;
    flex-direction: row;
  }
`;

export default UserInfoContainer;
