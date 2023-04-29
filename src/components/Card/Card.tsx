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
  onFollow: () => void;
}

export const Card = ({ user, onFollow }: CardProps) => {
  const { avatar, followers, tweets, isFollowed } = user;
  return (
    <Wrap>
      <Logo src={logo} />
      <AvatarWrap>
        <Avatar src={avatar} />
      </AvatarWrap>
      <ContentWrap>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>{followers} followers</Followers>
        <Button isFollowed={isFollowed} onClick={onFollow}>
          {isFollowed ? 'Following ' : 'Follow'}
        </Button>
      </ContentWrap>
    </Wrap>
  );
};
