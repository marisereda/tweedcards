import { useReducer } from 'react';
import { userReducer } from '~/api';
import { udateUser } from '~/api/operations';
import { User } from '~/types';
import { initialState } from '.';

export const useFollowUser = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { users, page, error, isLoading, hasNextPage } = state;

  const followUser = (user: User) => {
    const updatedUser = {
      ...user,
      isFollowed: !user.isFollowed,
      followers: user.followers + (user.isFollowed ? -1 : 1),
    };
    udateUser(updatedUser, dispatch);
  };

  return { isLoading, error, followUser };
};
