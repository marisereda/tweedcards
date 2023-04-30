import { useState } from 'react';
import toast from 'react-hot-toast';
import { errorMessage } from '~/contants';
import { fetchNextPage } from '~/redux/operations';
import { setFilter, useAppDispatch } from '~/redux/usersSlice';
import { Message } from '../Message';

import * as Select from '@radix-ui/react-select';
import { SelectContent, SelectItem, SelectTrigger } from './Dropdown.styled';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DrawingPinFilledIcon,
} from '@radix-ui/react-icons';

export const Dropdown = () => {
  const options = [
    { label: 'All', value: 'All' },
    { label: 'Follow', value: 'Follow' },
    { label: 'Following', value: 'Following' },
  ];
  const [selectedValue, setSelectedValue] = useState('All');
  const dispatch = useAppDispatch();

  const handleSelect = async (newValue: string) => {
    setSelectedValue(newValue);
    dispatch(setFilter(newValue));
    try {
      await dispatch(fetchNextPage()).unwrap();
    } catch (error) {
      toast.custom(<Message message={errorMessage} />);
    }
  };

  return (
    <Select.Root
      value={selectedValue}
      onValueChange={(value) => handleSelect(value)}
    >
      <SelectTrigger>
        <Select.Value aria-label={selectedValue}>{selectedValue}</Select.Value>
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={10}>
        <Select.Viewport>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <Select.ItemText> {option.label}</Select.ItemText>
              <Select.ItemIndicator>
                <DrawingPinFilledIcon />
              </Select.ItemIndicator>
            </SelectItem>
          ))}
        </Select.Viewport>
      </SelectContent>
    </Select.Root>
  );
};
