import { Action, State, User } from '~/types';

// export const initialState = {
//   users: [] as User[],
//   page: 1,
//   error: '',
//   isLoading: false,
//   hasNextPage: true,
// };
const pageSize = 4;

// type State = typeof initialState;
// type Action =
//   | {
//       type: 'error' | 'setIsLoading';
//     }
//   | {
//       type: 'getUsersPage';
//       payload: User[];
//     }
//   | {
//       type: 'updateUser';
//       payload: User;
//     };

// ****************************************************************
export const userReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'getUsersPage': {
      return {
        ...state,
        users: [...state.users, ...action.payload],
        page: state.page + 1,
        isLoading: false,
        hasNextPage: action.payload.length === pageSize,
      };
    }
    case 'updateUser': {
      return {
        ...state,
        users: state.users.map((user: User) =>
          user.id === action.payload.id ? action.payload : user
        ),
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: `Oops!! Something went wrong.
        Try again later!`,
        isLoading: false,
      };
    }
    case 'setIsLoading': {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
  }
};
