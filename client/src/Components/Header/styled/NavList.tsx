import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;

  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;
export default NavList;
