import styled from 'styled-components';
import { Link } from 'react-router-dom';
import girl from '~/assets/home_page_2x.jpg';
import bgImage from '~/assets/bg-image.png';

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100vw;
  /* background-color: #f3e8ff; */
  background-color: #e9d5ff;

  @media (min-width: 640px) {
    width: 50vw;
  }

  @media (min-width: 1200px) {
    background: url(${bgImage}) no-repeat center top 80px;
  }
`;

export const Right = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: block;
    width: 50vw;
    background: url(${girl}) no-repeat center/cover;
  }
`;

export const SyledLink = styled(Link)`
  min-width: 196px;
  padding: 16px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
  background-color: #5736a3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: background-color 250ms;

  :hover {
    background-color: #683ec4;
  }

  :active {
    background-color: #5736a3;
  }

  @media (min-width: 640px) {
    font-size: 28px;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  margin-bottom: 80px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1;
  color: #47317e;
  text-align: center;
`;
