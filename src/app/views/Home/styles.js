import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr;
  grid-gap: 24px;
  height: 100%;
`;

export const ImageHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

export const ImageHome = styled.img`
  width: 200px;
  max-width: 100%;
`;