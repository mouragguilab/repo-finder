import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 2px;
    margin: 2px;
  }
`;

export const Items = styled.ul`
  padding: 0px;
  margin: 0px;
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
`;