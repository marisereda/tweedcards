import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.a`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background-color: ${(p) => p.theme.colors.accent['300']};
  border-radius: ${(p) => p.theme.radii.sm};
  transition: background-color 250ms;

  cursor: pointer;

  :hover {
    background-color: ${(p) => p.theme.colors.accent['400']};
  }
`;
