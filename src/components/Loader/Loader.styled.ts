import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);

  }
`;

export const Loader = styled.div`
  position: relative;
  margin: auto;
  width: 18px;
  height: 18px;

  ::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    border: 3px solid currentColor;
    border-bottom-color: transparent;
    border-radius: 9999px;
    animation: ${rotate} 1s ease infinite;
  }
`;
