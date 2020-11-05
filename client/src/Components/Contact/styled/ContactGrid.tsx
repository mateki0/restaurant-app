import styled from 'styled-components';

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  > * {
    margin-top: 20px;
  }
  &:nth-child(2) {
    margin-left: 20px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;
export default ContactGrid;
