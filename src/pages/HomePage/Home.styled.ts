import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from '~/assets/bg-image.png';
import girl from '~/assets/home_page_2x.jpg';

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100vw;
  background-color: ${(p) => p.theme.colors.secondary['200']};

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
  padding: 18px 28px;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.x};
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.colors.secondary['200']};
  background-color: ${(p) => p.theme.colors.primary['800']};
  box-shadow: ${(p) => p.theme.shadows.sm};
  border-radius: 10px;
  transition: background-color 250ms;

  :hover {
    background-color: ${(p) => p.theme.colors.primary['700']};
  }

  :active {
    background-color: ${(p) => p.theme.colors.primary['800']};
  }

  @media (min-width: 640px) {
    font-size: ${(p) => p.theme.fontSizes['2xl']};
  }
`;

export const Text = styled.p`
  margin-bottom: 80px;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes['3xl']};
  line-height: 1;
  color: ${(p) => p.theme.colors.primary['900']};
  text-align: center;
`;
