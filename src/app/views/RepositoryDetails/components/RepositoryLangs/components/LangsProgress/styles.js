import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Progress = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ededed;
`;

export const Langs = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, auto));
  margin: 0px;
  padding: 0px;
  margin-top: 12px;
`;

export const Lang = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 6px;
  font-weight: 600;
  font-size: 14px;

  &:before {
    content: '';
    display: inline-block;
    background-color: ${props => props.color};
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-radius: 50%;
  }
`;

export const LangPercentage = styled.span`
  display: inline-block;
  margin-left: 6px;
  font-weight: 100;
  color: #586069;
`;
