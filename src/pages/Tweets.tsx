import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Container } from '~/components/Container';
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
import { ButtonWrap, Grid, Main, Wrap } from './Tweex.styled';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

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
    <Wrap>
      <Header />
      <Main>
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
            <ButtonWrap>
              <Button disabled={isFetching} isAccent onClick={handleNextPage}>
                {isFetching ? <Loader /> : <span>Load More</span>}
              </Button>
            </ButtonWrap>
          )}
        </Container>
      </Main>
      <Footer />
    </Wrap>
  );
};
