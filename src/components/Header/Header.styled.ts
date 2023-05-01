import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 24px 0;
  /* background-color: #47317e; */
  background-color: #765fcc;
  /* background-color: #e1af3e; */

  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background-color: #5cd3a8;
  border-radius: 10px;
  transition: background-color 250ms;

  cursor: pointer;

  :hover {
    background-color: #44c399;
  }
`;
