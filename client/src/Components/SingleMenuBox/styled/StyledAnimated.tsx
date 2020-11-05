import styled from 'styled-components';
import { Animated } from 'react-animated-css';

const StyledAnimated = styled(Animated)<{ fading: boolean }>`
  display: ${(props) => (props.fading ? 'grid' : 'none')};
`;
export default StyledAnimated;
