import { useCallback, useEffect, useReducer, useRef } from 'react';
import { getUsers } from '~/api/api';
import { User } from '~/types';

const pageSize = 4;

const initialState = {
  users: [] as User[],
  page: 0,
  error: '',
  isLoading: false,
  hasNextPage: true,
  shouldGetNextPage: true,
};

type State = typeof initialState;

type Action =
  | {
      type: 'error' | 'getNextPage';
    }
  | {
      type: 'success';
      payload: User[];
    };

// ****************************************************************
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'success': {
      return {
        ...state,
        users: [...state.users, ...action.payload],
        page: state.page + 1,
        error: '',
        isLoading: false,
        hasNextPage: action.payload.length === pageSize,
        shouldGetNextPage: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Something went wrong.Try again later',
        isLoading: false,
        shouldGetNextPage: false,
      };
    }
    case 'getNextPage': {
      return {
        ...state,
        shouldGetNextPage: true,
        isLoading: true,
      };
    }
  }
};

// ****************************************************************
export const useUsers = () => {
  const firstRender = useRef(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, page, error, isLoading, hasNextPage, shouldGetNextPage } =
    state;

  const nextPage = useCallback(() => {
    getUsers({ page: page + 1 })
      .then((data) => dispatch({ type: 'success', payload: data }))
      .catch(() => {
        dispatch({ type: 'error' });
      });
  }, [page]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (shouldGetNextPage) {
      getUsers({ page: page + 1 })
        .then((data) => dispatch({ type: 'success', payload: data }))
        .catch(() => {
          dispatch({ type: 'error' });
        });
    }
  }, [page, shouldGetNextPage]);

  return { users, isLoading, error, hasNextPage, nextPage };
};
