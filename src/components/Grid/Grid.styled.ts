import styled from 'styled-components';

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
