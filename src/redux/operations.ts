import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL, pageLimit } from '~/contants';
import type { User } from '~/types';
import { RootState } from './store';

axios.defaults.baseURL = baseURL;

// ----------------------------------------------------------------
export const fetchNextPage = createAsyncThunk<
  User[],
  void,
  { state: RootState }
>('users/fetchNextPage', async (_, thunkAPI) => {
  const page = thunkAPI.getState().users.page;
  const filter = thunkAPI.getState().users.filterByFollow;
  const searchParams = new URLSearchParams({
    page: String(page + 1),
    limit: String(pageLimit),
  });
  if (filter !== 'All') {
    searchParams.append('isFollowed', filter === 'Follow' ? 'false' : 'true');
  }
  const url = '/users?' + searchParams.toString();
  const { data } = await axios.get<User[]>(url);
  return data;
});

// ----------------------------------------------------------------
export const updateUser = createAsyncThunk<User, User>(
  'users/updateUser',
  async (user) => {
    const { data } = await axios.put<User>(`/users/${user.id}`, user);
    return data;
  }
);
