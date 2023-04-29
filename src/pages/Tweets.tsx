import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Container } from '~/components/Container';
import { Grid } from '~/components/Grid/Grid.styled';
import { Loader } from '~/components/Loader';
import { Message } from '~/components/Message';
import { fetchNextPage, updateUser } from '~/redux/operations';
import {
  selectError,
  selectHasNextPage,
  selectIsLoading,
  selectUsers,
  useAppDispatch,
  useAppSelector,
} from '~/redux/usersSlice';

export const Tweets = () => {
  const users = useAppSelector(selectUsers);
  const isLoading = useAppSelector(selectIsLoading);
  const hasNextPage = useAppSelector(selectHasNextPage);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(fetchNextPage());
  }, [dispatch]);

  if (error) {
    toast.custom(<Message message={error} />);
  }
  return (
    <Container>
      <Grid>
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onFollow={() => dispatch(updateUser(user))}
          />
        ))}
      </Grid>

      {users.length > 0 && hasNextPage && (
        <Button onClick={() => dispatch(fetchNextPage())}>
          {isLoading ? <Loader /> : <span>Load More</span>}
        </Button>
      )}
    </Container>
  );
};
