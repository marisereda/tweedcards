import { Wrap } from './Avatar.styled';

interface AvatarProps {
  src: string;
}

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <Wrap>
      <img src={src} width={80} height={80} alt="avatar" />
    </Wrap>
  );
};
