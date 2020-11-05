import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  > * {
    width: 200px;
  }
  @media only screen and (min-width: 1024px) {
    align-items: center;
    padding: 20px;
    > * {
      width: 400px;
    }
  }
`;
export default Form;
