import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  min-width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  background-color: #ebd8ff;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  svg {
    width: 24px;
    height: 24px;
    transition: transform 250ms;
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

export const SelectContent = styled(Select.Content)`
  min-width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  background-color: #ebd8ff;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  background-color: #ebd8ff;
  outline: none;
  cursor: pointer;

  &[data-highlighted] {
    background-color: #d9b4fe;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
