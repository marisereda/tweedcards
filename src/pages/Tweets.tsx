import toast from 'react-hot-toast';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Container } from '~/components/Container';
import { Grid } from '~/components/Grid/Grid.styled';
import { Loader } from '~/components/Loader';
import { Message } from '~/components/Message';
import { useFollowUser } from '~/hooks/useFollowUser';
import { useUsers } from '~/hooks/useUsers';

export const Tweets = () => {
  const { users, isLoading, error, hasNextPage, getNextPage } = useUsers();
  console.log('🚧 isLoading:', isLoading);

  const follow = useFollowUser();

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
            onFollow={() => follow.followUser(user)}
          />
        ))}
      </Grid>
      {users.length > 0 && hasNextPage && (
        <Button onClick={getNextPage}>
          {isLoading ? <Loader /> : <span>Load More</span>}
        </Button>
      )}
    </Container>
  );
};
