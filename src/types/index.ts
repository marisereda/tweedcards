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
  isFetching: boolean;
  whoIsUpdating: User['id'][];
  filterByFollow: string;
}
