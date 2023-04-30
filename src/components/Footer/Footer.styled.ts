import styled from 'styled-components';

export const SyledFooter = styled.footer`
  padding: 10px 0;
  background-color: #2b1d49;
`;

export const Wrap = styled.div`
  display: flex;

  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.3);
  background-color: transparent;
  transition: background-color 250ms;

  :hover {
    color: rgba(255, 255, 255, 0.5);
  }

  svg {
    fill: currentColor;
  }
`;
