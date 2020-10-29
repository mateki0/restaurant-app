import styled from 'styled-components';

const MenuLink = styled.a`
  align-self: center;
  margin-top: 10px;
  padding: 12px 18px;
  color: #fff;
  background: #7db641;
  border-color: #7db641;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background: #c83a3a;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    padding: 12px 2px;
  }
`;
export default MenuLink;
