import Modal from 'styled-react-modal';

const StyledModalWrapper = Modal.styled`
  background-color: #ffffff;
  width:100%;
  border-radius:25px;
  @media only screen and (min-width: 1024px) {
    width: 40vw;
    top: 20%;
    left: 30%;
    right: auto;
    bottom: auto;
  }
`;

export default StyledModalWrapper;
