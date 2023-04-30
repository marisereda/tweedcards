import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pageLimit } from '~/contants';
import { User, UserState } from '~/types';
import { fetchNextPage, updateUser } from './operations';
import { AppDispatch, RootState } from './store';

const initialState: UserState = {
  users: [],
  page: 0,
  hasNextPage: true,
  isFetching: false,
  whoIsUpdating: [],
  filterByFollow: 'All',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter(_, action: PayloadAction<string>) {
      return { ...initialState, filterByFollow: action.payload };
    },
  },
  extraReducers: (builder) => {
    // ----------------------------------------------------------------
    builder.addCase(fetchNextPage.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchNextPage.fulfilled, (state, action) => {
      state.users = [...state.users, ...action.payload];
      state.page += 1;
      state.hasNextPage = action.payload.length === pageLimit;
      state.isFetching = false;
    });

    builder.addCase(fetchNextPage.rejected, (state) => {
      state.isFetching = false;
    });

    // ----------------------------------------------------------------
    builder.addCase(updateUser.pending, (state, action) => {
      state.whoIsUpdating.push(action.meta.arg.id);
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user: User) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.whoIsUpdating = state.whoIsUpdating.filter((id) => {
        id !== action.payload.id;
      });
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.whoIsUpdating = state.whoIsUpdating.filter((id) => {
        id !== action.meta.arg.id;
      });
    });
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectHasNextPage = (state: RootState) => state.users.hasNextPage;
export const selectisFetching = (state: RootState) => state.users.isFetching;
export const selectWhoIsUpdating = (state: RootState) =>
  state.users.whoIsUpdating;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
