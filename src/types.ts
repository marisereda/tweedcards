export type User = {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  isFollowed?: boolean;
};

export interface UserState {
  users: User[];
  page: number;
  hasNextPage: boolean;
  isLoading: boolean;
  error: string;
}
