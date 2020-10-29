import styled from 'styled-components';

const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0%' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  z-index: 98;
  @media screen and (min-width: 1024px) {
    position: initial;
    visibility: visible;
    opacity: 1;
    width: 85vw;
    margin: 25px auto 0 auto;
    border-bottom: 1px solid #ff5200;
    border-radius: 3px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Menu;
