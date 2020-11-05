import styled from 'styled-components';

const NavListItem = styled.li`
  padding: 15px;
  text-align: center;
  font-size: 16px;
  > * {
    color: #000;
    text-decoration: none;
    padding: 5px 25px;
  }
  .small-link-active {
    color: #fcfcfc;
    background: #c83a3a;
  }
  &:first-of-type {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
    > * {
      padding: 15px 15px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
    > * {
      padding: 15px 25px;
    }
  }
`;

export default NavListItem;
