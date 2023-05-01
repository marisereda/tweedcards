import { Left, Main, Right, SyledLink, Text } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Main>
      <Left>
        <Text>Find your like-minded people and enjoy tweeting...</Text>
        <SyledLink to="/tweetcards">Get started</SyledLink>
      </Left>
      <Right></Right>
    </Main>
  );
};
