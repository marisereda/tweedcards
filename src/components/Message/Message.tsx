import { StyledMessage, Text } from './Message.styled';

interface MessageProps {
  message: string;
}

export const Message = ({ message }: MessageProps) => {
  return (
    <StyledMessage>
      <Text>{message}</Text>
    </StyledMessage>
  );
};
