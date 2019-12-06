import styled, { keyframes } from 'styled-components';
const entrance = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export default styled.div`
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-name: ${entrance};
  animation-delay: 0 ${props => props.order * 0.9}s;
`;
