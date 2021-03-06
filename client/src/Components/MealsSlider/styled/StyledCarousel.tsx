import styled from 'styled-components';
import { CarouselProvider } from 'pure-react-carousel';

const StyledCarousel = styled(CarouselProvider)<{ customheight?: string }>`
  position: relative;
  height: ${(props) => props.customheight};
  @media screen and (min-width: 1024px) {
    height: 365px;
  }
  .carousel__slider--horizontal {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .carousel__dot-group {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  .carousel__dot {
    padding: 8px;
    border-radius: 50%;
    border: none;
    background-color: #000;
    opacity: 0.5;
    margin-right: 10px;
  }
  .carousel__dot--selected {
    opacity: 1;
  }
`;
export default StyledCarousel;
