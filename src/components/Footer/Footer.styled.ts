import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: ${(p) => p.theme.radii.full};
  color: ${(p) => p.theme.colors.link};
  background-color: transparent;
  transition: background-color 250ms;

  :hover {
    color: ${(p) => p.theme.colors.linkHover};
  }
`;
