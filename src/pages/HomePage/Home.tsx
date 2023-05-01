import { Box } from '~/components/Box';
import { Left, Right, SyledLink, Text } from './Home.styled';

export const HomePage = () => {
  return (
    <Box as="main" display="flex" minHeight="100vh">
      <Left>
        <Text>Find your like-minded people and enjoy tweeting...</Text>
        <SyledLink to="/tweetcards">Get started</SyledLink>
      </Left>
      <Right></Right>
    </Box>
  );
};
