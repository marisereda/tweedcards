import { useEffect, useReducer, useRef } from 'react';
import { User } from '~/types';
import { getUsersPage, udateUser, userReducer } from '~/api';
import { initialState } from '.';

// const initialState = {
//   users: [] as User[],
//   page: 1,
//   error: '',
//   isLoading: false,
//   hasNextPage: true,
// };

// ****************************************************************
export const useUsers = () => {
  const firstRender = useRef(true);
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { users, page, error, isLoading, hasNextPage } = state;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getUsersPage(1, dispatch);
  }, []);

  const getNextPage = () => {
    getUsersPage(page + 1, dispatch);
  };

  // const followUser = (user: User) => {
  //   const updatedUser = {
  //     ...user,
  //     isFollowed: !user.isFollowed,
  //     followers: user.followers + (user.isFollowed ? -1 : 1),
  //   };
  //   udateUser(updatedUser, dispatch);
  // };

  return { users, isLoading, error, hasNextPage, getNextPage };
};
