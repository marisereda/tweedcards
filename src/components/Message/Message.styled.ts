import styled from 'styled-components';

export const StyledMessage = styled.div`
  width: 320px;
  padding: 0 16px;
  background-color: ${(p) => p.theme.colors.primary['400']};
  border-radius: ${(p) => p.theme.radii.md};
  box-shadow: ${(p) => p.theme.shadows.lg};
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes['3xl']};
  color: ${(p) => p.theme.colors.warmAccent['300']};
  text-shadow: ${(p) => p.theme.shadows.text3d};
  text-align: center;
`;
