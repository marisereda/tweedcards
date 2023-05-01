import styled from 'styled-components';
import bgAvatar from '~/assets/ellipse.png';

export const Wrap = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  overflow: hidden;
  background-color: #5736a3;

  :after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background: url(${bgAvatar}) no-repeat center;
  }
`;
