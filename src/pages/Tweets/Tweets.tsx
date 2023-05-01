import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Container } from '~/components/Container';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Loader } from '~/components/Loader';
import { Message } from '~/components/Message';
import { errorMessage } from '~/contants';
import { fetchNextPage, updateUser } from '~/redux/operations';
import {
  selectHasNextPage,
  selectUsers,
  selectWhoIsUpdating,
  selectisFetching,
  useAppDispatch,
  useAppSelector,
} from '~/redux/usersSlice';
import { User } from '~/types';
import { Grid } from './Tweex.styled';

export const Tweets = () => {
  const users = useAppSelector(selectUsers);
  const isFetching = useAppSelector(selectisFetching);
  const hasNextPage = useAppSelector(selectHasNextPage);
  const whoIsUpdating = useAppSelector(selectWhoIsUpdating);
  const dispatch = useAppDispatch();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(fetchNextPage())
      .unwrap()
      .catch(() => toast.custom(<Message message={errorMessage} />));
  }, [dispatch]);

  const handleFollow = async (user: User) => {
    const updatedUser = {
      ...user,
      followers: user.followers + (user.isFollowed ? -1 : 1),
      isFollowed: !user.isFollowed,
    };
    try {
      await dispatch(updateUser(updatedUser)).unwrap();
    } catch (error) {
      toast.custom(<Message message={errorMessage} />);
    }
  };

  const handleNextPage = async () => {
    try {
      await dispatch(fetchNextPage()).unwrap();
    } catch (error) {
      toast.custom(<Message message={errorMessage} />);
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box as="main" flexGrow={1} py={46}>
        <Container>
          <Grid>
            {users.map((user) => (
              <Card
                key={user.id}
                user={user}
                isUpdating={whoIsUpdating.includes(user.id)}
                onFollow={() => handleFollow(user)}
              />
            ))}
          </Grid>

          {users.length > 0 && hasNextPage && (
            <Box display="flex" justifyContent="center">
              <Button disabled={isFetching} isAccent onClick={handleNextPage}>
                {isFetching ? <Loader /> : <span>Load More</span>}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
