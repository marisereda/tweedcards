import styled from 'styled-components';
import {
  BackgroundProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  background,
  flexbox,
  grid,
  layout,
  space,
} from 'styled-system';

interface BoxProps
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps {
  children: React.ReactNode;
}

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
`;
