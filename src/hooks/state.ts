import { User } from '~/types';

export const initialState = {
  users: [] as User[],
  page: 1,
  error: '',
  isLoading: false,
  hasNextPage: true,
};
