import styled from 'styled-components';

interface ButtonProps {
  isFollowed?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: block;
  margin: 0 auto;
  padding: 16px;
  min-width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  color: #373737;
  background-color: ${(p) => (p.isFollowed ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: background-color 250ms;
  cursor: pointer;

  :hover {
    background-color: ${(p) => (p.isFollowed ? '#44c399' : '#d9b4fe')};
  }

  :active {
    background-color: ${(p) => (p.isFollowed ? '#5cd3a8' : '#ebd8ff')};
  }
`;
