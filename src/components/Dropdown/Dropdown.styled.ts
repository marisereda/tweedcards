import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 196px;
  padding: 14px;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.md};
  line-height: 1;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.secondary['200']};
  border-radius: ${(p) => p.theme.radii.sm};
  cursor: pointer;
  outline: none;

  svg {
    transition: transform 250ms;
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

export const SelectContent = styled(Select.Content)`
  min-width: 196px;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.md};
  line-height: 1;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.secondary['200']};
  border-radius: ${(p) => p.theme.radii.sm};
  box-shadow: ${(p) => p.theme.shadows.sm};
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const SelectItem = styled(Select.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.md};
  line-height: 1;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.secondary['200']};
  outline: none;
  cursor: pointer;

  &[data-highlighted] {
    background-color: ${(p) => p.theme.colors.secondary['300']};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
