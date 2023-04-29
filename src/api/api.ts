import { User } from '~/types';

import axios from 'axios';

axios.defaults.baseURL = 'https://644aacf579279846dcef5aea.mockapi.io/api';

export const getUsers = async ({ page = 1, limit = 4 }) => {
  const { data } = await axios.get<User[]>(
    `/users?page=${page}&limit=${limit}`
  );
  return data;
};

export const patchUser = async (user: User) => {
  const { data } = await axios.put<User>(`/users/${user.id}`, user);
  return data;
};
