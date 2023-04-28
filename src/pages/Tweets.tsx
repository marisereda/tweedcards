import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Container } from '~/components/Container';
import { Grid } from '~/components/Grid/Grid.styled';
import { Loader } from '~/components/Loader';
import { useUsers } from '~/hooks/useUsers';

export const Tweets = () => {
  const { users, isLoading, error, hasNextPage, nextPage } = useUsers();
  console.log('🚧 isLoading:', isLoading);

  return (
    <Container>
      <Grid>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </Grid>
      <Button onClick={nextPage}>
        {isLoading ? <Loader /> : <span>Load More</span>}
      </Button>
    </Container>
  );
};
