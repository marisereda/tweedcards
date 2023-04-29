import { createAsyncThunk } from '@reduxjs/toolkit';
import type { User } from '~/types';
import axios from 'axios';
import { baseURL, pageLimit } from '~/contants';
import { RootState } from './store';

axios.defaults.baseURL = baseURL;

export const fetchNextPage = createAsyncThunk<
  User[],
  void,
  { state: RootState }
>('users/fetchNextPage', async (_, thunkAPI) => {
  const page = thunkAPI.getState().users.page;
  const { data } = await axios.get<User[]>(
    `/users?page=${page + 1}&limit=${pageLimit}`
  );
  return data;
});

export const updateUser = createAsyncThunk<User, User>(
  'users/updateUser',
  async (user) => {
    const { data } = await axios.put<User>(`/users/${user.id}`, user);
    return data;
  }
);
