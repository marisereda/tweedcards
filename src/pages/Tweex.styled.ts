import styled from 'styled-components';

export const Wrap = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 24px 0;
  background-color: #47317e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 46px 0;
  /* text-align: center; */
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 46px;
  margin: 0 auto 50px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
