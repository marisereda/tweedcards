export type User = {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  isFollowed?: boolean;
};

export type Action =
  | {
      type: 'error' | 'setIsLoading';
    }
  | {
      type: 'getUsersPage';
      payload: User[];
    }
  | {
      type: 'updateUser';
      payload: User;
    };

export type State = {
  users: User[];
  page: number;
  error: string;
  isLoading: boolean;
  hasNextPage: boolean;
};
