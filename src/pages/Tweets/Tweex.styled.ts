import styled from 'styled-components';

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
