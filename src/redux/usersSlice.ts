import { createSlice } from '@reduxjs/toolkit';
import { User, UserState } from '~/types';
import { AppDispatch, RootState } from './store';
import { fetchNextPage, updateUser } from './operations';
import { pageLimit } from '~/contants';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const initialState: UserState = {
  users: [],
  page: 0,
  hasNextPage: true,
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNextPage.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(fetchNextPage.fulfilled, (state, action) => {
      state.users = [...state.users, ...action.payload];
      state.page += 1;
      state.hasNextPage = action.payload.length === pageLimit;
      state.isLoading = false;
    });

    builder.addCase(fetchNextPage.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Oops!! Something went wrong.\nTry again later!';
    });
    // ----------------------------------------------------------------
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user: User) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.isLoading = false;
    });

    builder.addCase(updateUser.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Oops!! Something went wrong.\nTry again later!';
    });
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectIsLoading = (state: RootState) => state.users.isLoading;
export const selectHasNextPage = (state: RootState) => state.users.hasNextPage;
export const selectError = (state: RootState) => state.users.error;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default usersSlice.reducer;
