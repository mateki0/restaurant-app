import styled from 'styled-components';

const SubmitButton = styled.button`
  margin-top: 40px;
  padding: 12px 45px;
  transition: all 0.5s;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  background: transparent;
  box-shadow: 2px 2px 10px 2px #000000;
  &:hover {
    cursor: pointer;
  }
`;

export default SubmitButton;
