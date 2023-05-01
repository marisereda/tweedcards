import styled from 'styled-components';

interface ButtonProps {
  isAccent?: boolean;
}

export const Button = styled.button<ButtonProps>`
  min-width: 196px;
  padding: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  color: #373737;
  background-color: ${(p) => (p.isAccent ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: background-color 250ms;
  cursor: pointer;

  :hover {
    background-color: ${(p) => (p.isAccent ? '#44c399' : '#d9b4fe')};
  }

  :active {
    background-color: ${(p) => (p.isAccent ? '#5cd3a8' : '#ebd8ff')};
  }
`;
