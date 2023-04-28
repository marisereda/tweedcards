import { User } from '~/types';
import {
  AvatarWrap,
  ContentWrap,
  Followers,
  Logo,
  Tweets,
  Wrap,
} from './Card.styled';
import logo from '~/assets/logo.svg';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

interface CardProps {
  user: User;
}

export const Card = ({
  user: { user, avatar, followers, tweets },
}: CardProps) => {
  return (
    <Wrap>
      <Logo src={logo} />
      <AvatarWrap>
        <Avatar src={avatar} />
      </AvatarWrap>
      <ContentWrap>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>{followers} followers</Followers>
        <Button isFollowed={false}>Follow</Button>
      </ContentWrap>
    </Wrap>
  );
};
