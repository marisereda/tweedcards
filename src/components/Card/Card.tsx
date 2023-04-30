import logo from '~/assets/logo.svg';
import { User } from '~/types';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Loader } from '../Loader';
import {
  AvatarWrap,
  ContentWrap,
  Followers,
  Logo,
  Tweets,
  Wrap,
} from './Card.styled';

interface CardProps {
  user: User;
  isUpdating: boolean;
  onFollow: () => void;
}

export const Card = ({ user, isUpdating, onFollow }: CardProps) => {
  const { avatar, followers, tweets, isFollowed } = user;
  const buttonText = isFollowed ? 'Following ' : 'Follow';
  return (
    <Wrap>
      <Logo src={logo} width={76} alt="GO IT" />
      <AvatarWrap>
        <Avatar src={avatar} />
      </AvatarWrap>
      <ContentWrap>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>{followers} followers</Followers>
        <Button disabled={isUpdating} isAccent={isFollowed} onClick={onFollow}>
          {isUpdating ? <Loader /> : <span>{buttonText}</span>}
        </Button>
      </ContentWrap>
    </Wrap>
  );
};
