import { Action, User } from '~/types';
import { getUsers, patchUser } from '.';

export const getUsersPage = (
  page: number,
  dispatch: React.Dispatch<Action>
) => {
  dispatch({ type: 'setIsLoading' });
  getUsers({ page })
    .then((data) => dispatch({ type: 'getUsersPage', payload: data }))
    .catch(() => {
      dispatch({ type: 'error' });
    });
};

export const udateUser = (user: User, dispatch: React.Dispatch<Action>) => {
  dispatch({ type: 'setIsLoading' });
  patchUser(user)
    .then((data) => dispatch({ type: 'updateUser', payload: data }))
    .catch(() => {
      dispatch({ type: 'error' });
    });
};
