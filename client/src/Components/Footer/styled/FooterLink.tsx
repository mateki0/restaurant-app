import styled from 'styled-components';

const FooterLink = styled.a`
  color: #fff;

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  :first-child {
    margin-right: 50px;
  }
`;

export default FooterLink;
