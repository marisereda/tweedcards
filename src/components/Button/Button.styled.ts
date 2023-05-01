import styled from 'styled-components';

interface ButtonProps {
  isAccent?: boolean;
}

export const Button = styled.button<ButtonProps>`
  min-width: 196px;
  padding: 16px;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.md};
  line-height: 1;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.textDark};
  background-color: ${(p) =>
    p.isAccent
      ? p.theme.colors.accent['300']
      : p.theme.colors.secondary['200']};
  box-shadow: ${(p) => p.theme.shadows.sm};
  border-radius: ${(p) => p.theme.radii.sm};
  transition: background-color 250ms;
  cursor: pointer;

  :hover {
    background-color: ${(p) =>
      p.isAccent
        ? p.theme.colors.accent['400']
        : p.theme.colors.secondary['300']};
  }

  :active {
    background-color: ${(p) =>
      p.isAccent
        ? p.theme.colors.accent['300']
        : p.theme.colors.secondary['200']};
  }
`;
