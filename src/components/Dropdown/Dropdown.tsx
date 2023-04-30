import { useState } from 'react';
import toast from 'react-hot-toast';
import { errorMessage } from '~/contants';
import { fetchNextPage } from '~/redux/operations';
import { setFilter, useAppDispatch } from '~/redux/usersSlice';
import { Message } from '../Message';

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
    <div>
      <select
        value={selectedValue}
        onChange={(event) => handleSelect(event.target.value)}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
