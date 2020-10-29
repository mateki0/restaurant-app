import styled from 'styled-components';

const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  box-shadow: 2px 4px 6px 2px #8c8c8c;

  font-weight: 600;
  padding: 4px 8px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    color: #c83a3a;
  }
`;

export default LogoutButton;
