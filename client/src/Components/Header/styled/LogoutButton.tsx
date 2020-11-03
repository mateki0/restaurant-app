import styled from 'styled-components';

const LogoutButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 2px 2px 10px 2px #000000;
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 4px 16px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    color: #c83a3a;
  }
`;

export default LogoutButton;
