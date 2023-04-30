import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px 0;
  background-color: #591c87;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  padding: 46px 0;
`;

export const Grid = styled.ul`
  display: grid;
  margin: 0 auto;
  margin-bottom: 50px;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 46px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1090px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
